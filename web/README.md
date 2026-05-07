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
loads counties and places as separate toggleable layers.

## Terrain

Combined HARP DEM grids can be converted into browser-ready terrain meshes with:

```sh
npm run convert:terrain-mesh
```

The viewer currently lazy-loads the 2 km mesh from
`public-data/elevation-models/combined/terrain-2000m.json` when the Terrain
checkbox is enabled.

## Water Bodies

Lake and river shapefiles can be converted into binary line layers with:

```sh
npm run convert:water-bodies
```

The generated assets are written under
`public-data/water-bodies/converted/` and loaded lazily by the Lakes, Lake Fill,
and Rivers toggles.

## Roads

The California State Highway Network shapefile can be converted into a binary
line layer with:

```sh
npm run convert:roads
```

The generated assets are written under `public-data/roads/converted/` and
loaded lazily by the Highways toggle in the Roads group.

## Notes

This first viewer uses a dependency-free WebGL renderer so the project can be
run locally before package and deployment decisions harden. The planned
React/TypeScript/Vite/vtk.js stack can be layered into `client/` next without
changing the generated `public-data/faults/manifest.json` boundary.
