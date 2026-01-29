package org.scec.vtk.plugins.opensha.geoJSON;

import java.awt.Color;
import java.util.ArrayList;

import org.scec.vtk.commons.opensha.faults.colorers.FaultColorer;
import org.scec.vtk.commons.opensha.surfaces.GeometryGenerator;
import org.scec.vtk.plugins.opensha.AbstractFaultPlugin;
import org.scec.vtk.plugins.opensha.FaultPluginGUI;

public class GeoJSONPlugin extends AbstractFaultPlugin {

	@Override
	protected FaultPluginGUI buildGUI() throws Exception {
		GeoJSONPluginBuilder builder = new GeoJSONPluginBuilder();
		ArrayList<FaultColorer> colorers = new ArrayList<>();
		colorers.add(new GeoJSONPropertyColorer());
		ArrayList<GeometryGenerator> geomGens = new ArrayList<>();
		geomGens.add(new GeoJSONGeometryGenerator());
		
		FaultPluginGUI gui = new FaultPluginGUI(this, builder, colorers, geomGens, Color.GRAY);
		return gui;
	}

}
