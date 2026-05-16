# SCEC-VDO Web MVP

This directory is the local-first start of the web migration described in
`docs/web-app-migration-plan.md`.

The current slice intentionally stays small:

- `client/` serves a browser fault viewer.
- `convert/` downloads and converts CFM Explorer TSurf files into web mesh JSON.
- `public-data/` holds generated local assets loaded by the viewer.

It does not include any Compute Engine deployment pieces yet.

## Run Locally

From this directory:

```sh
npm run convert:faults
npm run dev
```

Then open the URL printed by the dev server, usually:

```text
http://127.0.0.1:4173
```

## Checks

```sh
npm run smoke
```

The conversion scripts intentionally use `/Users/mar2194/anaconda3/bin/python`
so local scientific Python dependencies are consistent.
The tsunami hazard converter also uses `mapbox_earcut` for full-resolution
polygon triangulation:

```sh
/Users/mar2194/anaconda3/bin/pip install mapbox_earcut
```

Healthcare facility points can be converted from the local CSV with:

```sh
npm run convert:hospitals
```

This keeps facilities where `LICENSED_CERTIFIED` is `LICENSED AND CERTIFIED`
and `CAPACITY` is greater than zero.

## CFM 7.0 Preferred

The local CFM 7 preferred dataset is pulled from the CFM Explorer 1000 m TSurf
download list and converted into the same mesh JSON boundary used by the MVP:

```sh
npm run download:cfm7-preferred
npm run convert:cfm7-preferred
```

Raw source files are stored in `public-data/faults/cfm7-preferred/source/1000m/`.
Converted meshes are stored in `public-data/faults/cfm7-preferred/faults/`.

## Political Boundaries

California county and place shapefiles can be converted for the viewer with:

```sh
npm run convert:political-boundaries
```

The generated line meshes are written to
`public-data/political-boundaries/ca_counties/counties-boundaries.json` and
`public-data/political-boundaries/ca_places/places-boundaries.json`. The viewer
loads counties and places as separate toggleable layers. Counties are also
generated as a 500 m DEM-draped binary layer with line interpolation across
missing DEM spans; the Counties 3D checkbox switches to that layer.

## Terrain

Combined HARP DEM grids can be converted into browser-ready terrain meshes with:

```sh
npm run convert:terrain-mesh
```

The viewer currently lazy-loads the 500 m mesh from
`public-data/elevation-models/combined/terrain-500m.json` when the Terrain
checkbox is enabled.

## Water Bodies

Lake and river shapefiles can be converted into binary line layers with:

```sh
npm run convert:water-bodies
```

For faster iteration on rivers only:

```sh
npm run convert:lakes
npm run convert:rivers
```

The generated assets are written under
`public-data/water-bodies/converted/` and loaded lazily by the Lakes, Lake Fill,
and Rivers toggles. Lakes and rivers are generated as flat binary line layers
and 500 m DEM-aware layers; the 3D checkboxes switch to the elevated versions
without requiring Terrain to be enabled. Lake fill uses one representative DEM
elevation per polygon so filled lakes stay visually flat like water.

## Geology

California geologic-unit polygons can be downloaded from the California
Geological Survey ArcGIS REST service with:

```sh
npm run download:geology
```

The downloader pages through layer `12`, `Generalized Rock Types`, from
`https://gis.conservation.ca.gov/server/rest/services/CGS/Geologic_Map_of_California/MapServer`
and writes a WGS84 shapefile bundle under
`public-data/geology/cgs-geologic-map-of-california/`. It also writes
`geologic_units-style.json`, preserving the ArcGIS `PTYPE` color renderer for a
future web-map geology layer.

## Roads

The road shapefiles can be converted into browser-ready line layers with:

```sh
npm run convert:roads
```

For faster iteration on one source:

```sh
npm run convert:highways
npm run convert:public-roads
```

The California State Highway Network is generated as both a flat binary line
layer and a 500 m DEM-draped binary line layer. The Highways toggle shows the
flat layer by default; the 3D checkbox switches to the draped layer without
requiring Terrain to be enabled. The California All Public Roads Network is
generated as both flat and 500 m DEM-draped 0.25-degree geometry tiles with
parallel per-segment route-id buffers and sharded street-name search files. The
3D public-roads path interpolates across DEM no-data gaps before tiling, with a
nearest-valid fallback for road parts that are entirely inside no-data areas, so
roads bridge holes rather than dropping toward zero elevation. Manually selected
streets are loaded from their tiles and pinned at any zoom; the All public roads
layer only loads nearby tiles when the camera is zoomed in close to the focus
point. The All zoom slider in the Roads controls adjusts that camera-distance
threshold.

## Notes

This first viewer uses a dependency-free WebGL renderer so the project can be
run locally before package and deployment decisions harden. The planned
React/TypeScript/Vite/vtk.js stack can be layered into `client/` next without
changing the generated `public-data/faults/manifest.json` boundary.
