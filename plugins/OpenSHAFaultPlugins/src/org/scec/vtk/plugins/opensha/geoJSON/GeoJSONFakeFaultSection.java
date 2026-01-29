package org.scec.vtk.plugins.opensha.geoJSON;

import java.awt.Color;
import java.util.Objects;

import org.opensha.commons.geo.Location;
import org.opensha.commons.geo.json.Feature;
import org.opensha.commons.geo.json.FeatureProperties;
import org.opensha.commons.param.ParameterList;
import org.opensha.sha.faultSurface.FourPointEvenlyGriddedSurface;
import org.opensha.sha.faultSurface.Surface3D;
import org.scec.vtk.commons.opensha.faults.AbstractFaultSection;

public class GeoJSONFakeFaultSection extends AbstractFaultSection {

	private Feature feature;
	
	private static final Location FAKE_LOC = new Location(0, 0);
	private static final Surface3D FAKE_SURFACE = new FourPointEvenlyGriddedSurface(FAKE_LOC, FAKE_LOC, FAKE_LOC, FAKE_LOC);

	public GeoJSONFakeFaultSection(Feature feature, int index) {
		super(defaultName(feature), index);
		this.feature = feature;
	}
	
	private static String defaultName(Feature feature) {
		if (feature.id == null)
			return "Unknown ["+feature.geometry.type+"]";
		
		return Objects.toString(feature.id)+" ["+feature.geometry.type+"]";
	}

	@Override
	public Surface3D createSurface(ParameterList faultRepresentationParams) {
		return FAKE_SURFACE;
	}

	@Override
	public double getSlipRate() {
		return Double.NaN;
	}

	@Override
	public double getAvgRake() {
		return Double.NaN;
	}

	@Override
	public double getAvgStrike() {
		return Double.NaN;
	}

	@Override
	public double getAvgDip() {
		return Double.NaN;
	}
	
	public Feature getFeature() {
		return feature;
	}

}
