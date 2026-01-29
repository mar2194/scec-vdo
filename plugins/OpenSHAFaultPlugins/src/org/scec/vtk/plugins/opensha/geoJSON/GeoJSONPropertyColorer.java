package org.scec.vtk.plugins.opensha.geoJSON;

import java.awt.Color;

import org.opensha.commons.geo.json.Feature;
import org.opensha.commons.geo.json.FeatureProperties;
import org.opensha.commons.geo.json.GeoJSON_Type;
import org.opensha.commons.param.ParameterList;
import org.scec.vtk.commons.opensha.faults.AbstractFaultSection;
import org.scec.vtk.commons.opensha.faults.colorers.ColorerChangeListener;
import org.scec.vtk.commons.opensha.faults.colorers.FaultColorer;

import com.google.common.base.Preconditions;

public class GeoJSONPropertyColorer implements FaultColorer {
	
	static final Color GEOM_COLLECTION_DEFAULT_COLOR = new Color(127, 127, 127);

	@Override
	public String getName() {
		return "GeoJSON Property Colors";
	}

	@Override
	public Color getColor(AbstractFaultSection fault) {
		Preconditions.checkState(fault instanceof GeoJSONFakeFaultSection);
		Feature feature = ((GeoJSONFakeFaultSection)fault).getFeature();
		Color strokeColor = feature.properties.getColor(FeatureProperties.STROKE_COLOR_PROP);
		Color fillColor = feature.properties.getColor(FeatureProperties.FILL_COLOR_PROP);
		Color pointColor = feature.properties.getColor(FeatureProperties.MARKER_COLOR_PROP);
		
		if (feature.geometry.type == GeoJSON_Type.LineString || feature.geometry.type == GeoJSON_Type.MultiLineString) {
			if (strokeColor == null)
				return GeoJSONGeometryGenerator.STROKE_COLOR_DEFAULT;
			return strokeColor;
		} else if (feature.geometry.type == GeoJSON_Type.Polygon || feature.geometry.type == GeoJSON_Type.MultiPolygon) {
			if (fillColor == null)
				return GeoJSONGeometryGenerator.FILL_COLOR_DEFAULT;
			return fillColor;
		} else if (feature.geometry.type == GeoJSON_Type.Point || feature.geometry.type == GeoJSON_Type.MultiPoint) {
			if (pointColor == null)
				return GeoJSONGeometryGenerator.POINT_COLOR_DEFAULT;
			return pointColor;
		} else {
			Preconditions.checkState(feature.geometry.type == GeoJSON_Type.GeometryCollection);
			return GEOM_COLLECTION_DEFAULT_COLOR;
		}
	}

	@Override
	public ParameterList getColorerParameters() {
		return null;
	}

	@Override
	public void setColorerChangeListener(ColorerChangeListener l) {
	}

	@Override
	public String getLegendLabel() {
		return getName();
	}

}
