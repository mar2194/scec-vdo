package org.scec.vtk.plugins.opensha.geoJSON;

import java.awt.Color;

import org.opensha.commons.geo.Location;
import org.opensha.commons.geo.LocationList;
import org.opensha.commons.geo.json.Feature;
import org.opensha.commons.geo.json.FeatureProperties;
import org.opensha.commons.geo.json.Geometry;
import org.opensha.commons.geo.json.Geometry.GeometryCollection;
import org.opensha.commons.geo.json.Geometry.LineString;
import org.opensha.commons.geo.json.Geometry.MultiLineString;
import org.opensha.commons.geo.json.Geometry.MultiPoint;
import org.opensha.commons.geo.json.Geometry.MultiPolygon;
import org.opensha.commons.geo.json.Geometry.Point;
import org.opensha.commons.geo.json.Geometry.Polygon;
import org.opensha.commons.param.ParameterList;
import org.opensha.sha.faultSurface.Surface3D;
import org.scec.vtk.commons.opensha.faults.AbstractFaultSection;
import org.scec.vtk.commons.opensha.surfaces.FaultSectionActorList;
import org.scec.vtk.commons.opensha.surfaces.GeometryGenerator;
import org.scec.vtk.tools.Transform;

import com.google.common.base.Preconditions;

import net.mahdilamb.colormap.Colors;
import vtk.vtkActor;
import vtk.vtkCellArray;
import vtk.vtkDataSetMapper;
import vtk.vtkLine;
import vtk.vtkPoints;
import vtk.vtkPolyData;
import vtk.vtkPolyDataMapper;
import vtk.vtkUnstructuredGrid;
import vtk.vtkVertex;

public class GeoJSONGeometryGenerator extends GeometryGenerator {
	
	public GeoJSONGeometryGenerator() {
		super("GeoJSON Geometry Generator");
	}

	static final Color STROKE_COLOR_DEFAULT = Colors.GRAY;
	static final double STROKE_WIDTH_DEFAULT = 1d;
	static final double STROKE_OPACITY_DEFAULT = 1d;
	
	static final Color FILL_COLOR_DEFAULT = Color.GRAY;
	static final double FILL_OPACITY_DEFAULT = 0.25;

	static final Color POINT_COLOR_DEFAULT = Colors.GRAY;
	static final double POINT_SIZE_DEFAULT = 4d;

	@Override
	public FaultSectionActorList createFaultActors(Surface3D surface, Color color, AbstractFaultSection fault) {
		Preconditions.checkState(fault instanceof GeoJSONFakeFaultSection);
		Feature feature = ((GeoJSONFakeFaultSection)fault).getFeature();
		
		FaultSectionActorList actors = new FaultSectionActorList(fault);
		
		GeometryBuilder builder = new GeometryBuilder(actors, feature, color);
		builder.processGeometry(feature.geometry);
		
		return actors;
	}
	
	private class GeometryBuilder {
		
		private final FaultSectionActorList actors;
		private final Color externalColor;
		
		private final Color strokeColor;
		private final double strokeWidth;
		private final double strokeOpacity;
		
		private final Color fillColor;
		private final double fillOpacity;
		
		private final Color pointColor;
		private final double pointSize;

		public GeometryBuilder(FaultSectionActorList actors, Feature feature, Color externalColor) {
			this.actors = actors;
			if (externalColor == GeoJSONPropertyColorer.GEOM_COLLECTION_DEFAULT_COLOR)
				// hasn't been overridden
				externalColor = null;
			this.externalColor = externalColor;
			
			FeatureProperties props = feature.properties;
			
			strokeColor = props.getColor(FeatureProperties.STROKE_COLOR_PROP, STROKE_COLOR_DEFAULT);
			strokeWidth = props.getDouble(FeatureProperties.STROKE_WIDTH_PROP, STROKE_WIDTH_DEFAULT);
			strokeOpacity = props.getDouble(FeatureProperties.STROKE_OPACITY_PROP, STROKE_OPACITY_DEFAULT);
			
			fillColor = props.getColor(FeatureProperties.FILL_COLOR_PROP, FILL_COLOR_DEFAULT);
			fillOpacity = props.getDouble(FeatureProperties.FILL_OPACITY_PROP, FILL_OPACITY_DEFAULT);
			
			pointColor = props.getColor(FeatureProperties.MARKER_COLOR_PROP, POINT_COLOR_DEFAULT);
			
			String markerSize = props.getString(FeatureProperties.MARKER_SIZE_PROP, null);
			if (markerSize == null)
				pointSize = POINT_SIZE_DEFAULT;
			else if (markerSize.equals(FeatureProperties.MARKER_SIZE_LARGE))
				pointSize = 10d;
			else if (markerSize.equals(FeatureProperties.MARKER_SIZE_MEDIUM))
				pointSize = 6d;
			else if (markerSize.equals(FeatureProperties.MARKER_SIZE_SMALL))
				pointSize = 3d;
			else
				pointSize = POINT_SIZE_DEFAULT;
		}
		
		private void processGeometry(Geometry geom) {
//			System.out.println("Beuilding geometry of type "+geom.type+" with externalColor="+externalColor);
			
			switch (geom.type) {
			case LineString:
				processLine(((LineString)geom).line);
				break;
			case MultiLineString:
				for (LocationList line : ((MultiLineString)geom).lines)
					processLine(line);
				break;
			case Point:
				processPoints(LocationList.of(((Point)geom).point));
				break;
			case MultiPoint:
				processPoints(((MultiPoint)geom).points);
				break;
			case Polygon:
				processPolygon(((Polygon)geom).polygon);
				break;
			case MultiPolygon:
				for (Polygon poly : ((MultiPolygon)geom).polygons)
					processGeometry(poly);
				break;
			case GeometryCollection:
				for (Geometry subGeom : ((GeometryCollection)geom).geometries)
					processGeometry(subGeom);
				return;

			default:
				throw new IllegalStateException("Unexpected geometry type: "+geom.type);
			}
		}
		
		private void processLine(LocationList poly) {
			if (strokeOpacity == 0d || strokeWidth == 0d)
				return;
			
			Color color = externalColor == null ? strokeColor : externalColor;
			processLocationList(poly, GeometryType.LINE, color);
		}
		
		private void processPolygon(LocationList poly) {
			Preconditions.checkState(poly.size() > 1, "Must have at least 3 points for a polygon");
			
			if (fillOpacity > 0d) {
				// fill polygon
				Color color = externalColor == null ? fillColor : externalColor;
				processLocationList(poly, GeometryType.POLYGON, color);
			}
			
			if (strokeOpacity > 0d && strokeWidth > 0d) {
				// draw lines
				processLocationList(poly, GeometryType.LINE, strokeColor);
			}
		}
		
		private void processLocationList(LocationList list, GeometryType type, Color color) {
//			System.out.println("Processing location list for type: "+type);
			vtkActor actor = new vtkActor();
			vtkPoints pts = new vtkPoints();
			vtkCellArray cells = new vtkCellArray();
			vtkPolyData polyData = new vtkPolyData();
			polyData.SetPoints(pts);
			if (type == GeometryType.LINE)
				polyData.SetLines(cells);
			else if (type == GeometryType.POLYGON)
				polyData.SetPolys(cells);
			
			vtkLine line = new vtkLine();
			int size = list.size();
			if (type == GeometryType.POLYGON) {
				boolean closed = list.first().equals(list.last());
				if (closed)
					// vtk polygons are not supposed to be closed
					size--;
				Preconditions.checkState(size >= 3);
			}
			line.GetPointIds().SetNumberOfIds(size);
			
			for (int i=0; i<size; i++) {
				Location loc = list.get(i);
				double[] pt = Transform.transformLatLonHeight(loc.getLatitude(), loc.getLongitude(), -loc.getDepth());
				pts.InsertNextPoint(pt);
				line.GetPointIds().SetId(i, i);
			}
			Preconditions.checkState(pts.GetNumberOfPoints() == size);
			cells.InsertNextCell(line);
			
			vtkPolyDataMapper mapper = new vtkPolyDataMapper();
			mapper.SetInputData(polyData);
			
			actor.SetMapper(mapper);
			if (type == GeometryType.LINE) {
				actor.GetProperty().SetColor(getColorDoubleArray(color));
				actor.GetProperty().SetLineWidth((float)strokeWidth);
				actor.GetProperty().SetOpacity(strokeOpacity);
			} else if (type == GeometryType.POLYGON) {
				actor.GetProperty().SetColor(getColorDoubleArray(color));
				actor.GetProperty().SetOpacity(fillOpacity);
			}
			
			actor.Modified();
			
			actors.add(actor);
		}
		
		private void processPoints(LocationList points) {
			Preconditions.checkState(points.size() >= 1, "Must have at least 3 points for a polygon");
			
			if (pointSize == 0d)
				return;
			
			vtkUnstructuredGrid gridData = new vtkUnstructuredGrid();
			vtkPoints pts = new vtkPoints();
			vtkActor actor = new vtkActor();
			
			for (Location loc : points) {
				double[] pt = Transform.transformLatLonHeight(loc.getLatitude(), loc.getLongitude(), -loc.getDepth());
				pts.InsertNextPoint(pt);
			}
			
			for (int i=0; i<pts.GetNumberOfPoints(); i++) {
				vtkVertex vertex = new vtkVertex();
				
				vertex.GetPointIds().SetId(0, i);
				gridData.InsertNextCell(vertex.GetCellType(), vertex.GetPointIds());
			}
			
			gridData.SetPoints(pts);
			vtkDataSetMapper mapper = new vtkDataSetMapper();
			mapper.SetInputData(gridData);
			
			actor.SetMapper(mapper);
			actor.GetProperty().SetPointSize((float)pointSize);
			Color color = externalColor == null ? pointColor : externalColor;
			actor.GetProperty().SetColor(getColorDoubleArray(color));
			actor.GetProperty().SetOpacity(1d);
			
			actor.Modified();
			
			actors.add(actor);
		}
	}

	@Override
	public ParameterList getDisplayParams() {
		return null;
	}

}
