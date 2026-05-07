# SCEC-VDO Web App Migration Plan

## Executive Summary

The right migration strategy is to build a new web application next to the existing Java desktop application, preserving the data, visual behaviors, and scientific workflows that matter while leaving behind Swing, the Java plugin shell, and bundled native VTK libraries.

This should not be treated as a line-by-line port. The existing app is mostly a desktop orchestration layer around VTK actors, local files, plugin XML, and Java/Swing UI state. The web version should instead be a browser-rendered 3D viewer backed by a data conversion pipeline and a small API.

Recommended target:

- Frontend: React, TypeScript, Vite, vtk.js.
- Backend: FastAPI or Node/Express. FastAPI is slightly preferred because the data conversion stack will likely use Python.
- Rendering: client-side WebGL via vtk.js, with optional future Three.js/glTF export if general 3D asset tooling becomes more important.
- Deployment: Dockerized app on GCP Compute Engine, with static converted assets served from the VM initially and Cloud Storage/CDN later.
- New project path: `web/` at the repository root, leaving the current Java project untouched.

Initial effort estimate:

- Usable MVP fault viewer: 4 to 6 weeks.
- Public, polished web app with catalogs, saved scenes, and deployment: 8 to 12 weeks.
- Near-full desktop parity, including OpenSHA workflows and movie rendering: 4 to 6+ months.

## Current Repository Findings

The existing application is a Java 11 Swing desktop app using VTK through native libraries.

Important current files and areas:

- `src/org/scec/vtk/main/MainGUI.java`: Swing shell, VTK render window, camera, plugin tabs, picking, toolbar.
- `src/org/scec/vtk/main/MainMenu.java`: scene save/load, VTK/OBJ/VTP export, screenshot, publish-to-old-web flow.
- `src/org/scec/vtk/tools/Transform.java`: lat/lon/depth to 3D globe coordinate transform.
- `plugins/CommunityFaultModelPlugin`: CFM fault import, groups, tables, mesh display, picking.
- `plugins/EarthquakeCatalogPlugin`: earthquake catalog import, filtering, glyph rendering, ComCat support.
- `plugins/SurfacePlugin`: map textures, DEM surfaces, preset map images.
- `plugins/ShakeMapPlugin`: ShakeMap grid loading and color palette rendering.
- `plugins/OpenSHAFaultPlugins`: OpenSHA-derived fault, rupture, simulator, UCERF, GeoJSON workflows.
- `data/CFM/CFM5_release_2014`: CFM5 GOCAD TSurf source files.
- `california_cfm.vtk`: legacy VTK PolyData fault dataset.
- `conf/ScecVideoDefaults`: old local library defaults and Java-era plugin state.

Repository size is dominated by assets and runtime dependencies:

- `vtkLibs`: about 1.3 GB of native VTK libraries.
- `data`: about 229 MB of maps, CFM, ShakeMaps, GIS data.
- `lib`: about 103 MB of Java jars.

The web app should use the source/data assets, not the desktop runtime packaging.

## Goals

The web app should make SCEC-VDO available as a standard browser application that can be deployed, shared, and used without installing Java, VTK, platform-specific native libraries, or a desktop bundle.

Primary goals:

- Render 3D faults on a globe or regional view.
- Preserve the essential CFM visualization workflow.
- Support fault groups, search, color, opacity, mesh/surface display, picking, and metadata.
- Render base maps, graticules, political boundaries, and optional GIS overlays.
- Render earthquake catalogs with magnitude/depth/date filtering.
- Support saved scenes and shareable URLs.
- Allow static public browsing first, with uploads/imports later.
- Deploy cleanly to GCP Compute Engine using containers.

Secondary goals:

- Add user-uploaded `.ts`, `.vtk`, `.vtp`, `.geojson`, and catalog files.
- Support ShakeMap overlays.
- Support screenshot export from the browser.
- Support movie/render export later.
- Preserve selected OpenSHA/UCERF outputs as precomputed datasets before trying to port live computation.

## Non-Goals for the First Release

Do not port these in the MVP:

- Swing UI behavior.
- The Java plugin framework.
- The wizard.
- Java object serialization formats as public-facing formats.
- Full OpenSHA computation in the browser.
- Full video rendering/timeline export.
- The old `scecvdo.usc.edu/viewer/publish.php` upload workflow.
- Platform-specific VTK native libraries.

## Recommended New Project Layout

Create this structure:

```text
web/
  README.md
  package.json
  pnpm-workspace.yaml
  client/
    index.html
    src/
      app/
      components/
      viewer/
      layers/
      state/
      styles/
  api/
    pyproject.toml
    app/
      main.py
      routes/
      models/
      storage/
  convert/
    pyproject.toml
    scecvdo_convert/
      cfm/
      catalogs/
      gis/
      shakemap/
      surfaces/
      common/
    tests/
  public-data/
    manifest.json
    faults/
    catalogs/
    maps/
    boundaries/
  infra/
    docker/
    gcp/
      startup-script.sh
      nginx.conf
      caddy/Caddyfile
```

Rationale:

- `client/` owns the browser experience.
- `api/` owns saved scenes, uploads, and metadata endpoints.
- `convert/` owns repeatable conversion from legacy/SCEC files to web assets.
- `public-data/` is generated output for local development and initial deployment.
- `infra/` keeps deployment scripts separate from app code.

## Technology Choices

### Frontend

Use React + TypeScript + Vite.

Why:

- Fast development.
- Good ecosystem for state, forms, routing, and panels.
- TypeScript helps keep layer metadata and scene state reliable.
- Easy static build for GCP deployment.

Recommended frontend packages:

- `vtk.js`: primary 3D/scientific renderer.
- `zustand`: viewer/layer/camera state.
- `@tanstack/react-query`: API and asset metadata fetching.
- `lucide-react`: icons.
- `react-router`: URL routes for saved scenes and shared views.

Avoid a heavy UI framework at first. The UI should be dense, utility-focused, and viewer-first.

### Renderer

Use vtk.js first.

Why:

- The existing app is already organized around VTK PolyData, actors, mappers, properties, and VTP export.
- VTK XML PolyData (`.vtp`) is a natural interchange format.
- It minimizes conceptual translation from the Java desktop app.

Optional later:

- Export glTF/Draco and render with Three.js if we need a more general 3D asset pipeline.
- Use deck.gl if the product shifts toward map-centric geospatial exploration rather than scientific globe visualization.

### Backend

Use FastAPI unless there is a strong reason to make everything Node.

Why:

- Python is strong for conversion tooling: XML, shapefiles, VTK/mesh tooling, NumPy, pandas, pyproj, raster processing.
- The backend can stay small: metadata, saved scenes, uploads, and catalog filtering.
- The same repository can contain conversion scripts and API models.

The rendering should stay client-side. The GCP VM does not need a GPU for the first version because users' browsers render the scene.

### Storage

Initial:

- Serve generated assets from `web/public-data/`.
- Save scenes as JSON files or SQLite rows on the VM.

Production:

- Store generated assets in Cloud Storage.
- Store scene metadata in SQLite initially, then Cloud SQL/Postgres or Firestore if accounts/collaboration become important.
- Store uploads in Cloud Storage.

## Data Conversion Strategy

The core of the migration is a repeatable conversion pipeline.

### Faults: CFM TSurf and VTK

Inputs:

- `data/CFM/CFM5_release_2014/tsurf/**/*.ts`
- `california_cfm.vtk`
- legacy `.flt` XML and `.dat` VTK PolyData from `conf/ScecVideoDefaults/Fault3DStore` if present or regenerated

Current behavior to preserve:

- `TSurfImport.java` reads `VRTX`, `PVRTX`, `TRGL`, and `ATOM` records.
- TSurf input coordinates are UTM.
- The current importer uses spheroid code `20` and UTM zone `11`.
- The importer converts UTM to lat/lon, then lat/lon/depth to 3D globe XYZ via `Transform.transformLatLonHeight`.
- Colors can come from `*solid*color`, but many faults default to light gray.
- Fault metadata is stored in `.flt` XML.

Web conversion output:

```text
public-data/faults/
  manifest.json
  cfm5-primary/
    group.json
    faults/
      SAFS-SAFZ-MJVS-San_Andreas_fault-CFM4.vtp
      SAFS-SAFZ-MJVS-San_Andreas_fault-CFM4.json
  cfm5-alt/
    group.json
    faults/
```

Fault metadata JSON should include:

- Stable fault id.
- Display name.
- Source filename.
- CFM version.
- Primary/alternative group.
- Region/fault-system tokens parsed from filename.
- Bounds in lat/lon/depth and XYZ.
- Vertex count and triangle count.
- Default color.
- Citation/reference/notes if available.

Implementation notes:

- First converter can use the same math as `Transform.java` to preserve visual parity.
- Later, decide whether to switch to a standard WGS84 ECEF transform. If we do, keep a compatibility mode and compare screenshots.
- Prefer `.vtp` for vtk.js loading. Keep a future option to emit glTF/Draco for smaller payloads.
- Generate a top-level manifest that supports lazy loading by group and search without loading all meshes.

### Earthquake Catalogs

Inputs:

- Plain text `.cat` files in `conf/ScecVideoDefaults/EQCatalogStore/display`.
- Java-serialized `.dat` files in `conf/ScecVideoDefaults/EQCatalogStore/display/data`.
- Potential ComCat-loaded data from the plugin workflow.

Current behavior to preserve:

- Earthquakes have id, time, latitude, longitude, depth, magnitude.
- Optional uncertainty and focal mechanism arrays exist.
- Points are transformed with `Transform.transformLatLonHeight(lat, lon, -depth)`.
- Color gradients are based on magnitude or depth.
- Display supports points and spheres.

Web conversion output:

```text
public-data/catalogs/
  manifest.json
  filteredCat_001/
    events.arrow
    metadata.json
```

Use Apache Arrow or Parquet for larger catalogs. JSON is acceptable for very small catalogs, but should not be the long-term format for large event sets.

Handling Java `.dat`:

- Prefer reparsing original text `.cat` source where available.
- If Java-only serialized data is important, write a one-time extractor using the current Java classes to emit CSV/JSON/Arrow. This does not mean Java becomes part of the web app.

Catalog metadata should include:

- Event count.
- Min/max lat/lon/depth/magnitude/date.
- Available columns.
- Source/citation.
- Default rendering settings.

### Maps and DEM Surfaces

Inputs:

- `data/Maps`
- DEM-like matrix files if present or added later
- hardcoded preset bounds from `SurfacePluginGUI.java`

Current behavior to preserve:

- Preset map images are applied as textures to curved globe patches.
- DEM surfaces use matrix heights, texture coordinates, and opacity.
- User can toggle visibility and transparency.

Web output:

```text
public-data/maps/
  manifest.json
  california/
    texture.jpg
    surface.vtp
    metadata.json
```

MVP:

- Render preset image textures on curved globe patches.
- Support opacity and visibility.

Later:

- Tile maps for high resolution.
- DEM surface meshes.
- External WMS/WMTS support.

Important risk:

- The old Google Static Maps and WMS behavior may not be reusable publicly without new API keys, terms review, or replacement data sources.

### Political Boundaries and GIS Layers

Inputs:

- `data/GISLocationPlugin/*.shp`, `.dbf`, `.shx`
- `data/GISLocationPlugin/*.txt`
- `data/PoliticalBoundaries`

Web output:

```text
public-data/boundaries/
  manifest.json
  ca_counties.geojson
  ca_interstates.geojson
  ca_cities.geojson
```

MVP:

- Convert shapefiles to GeoJSON.
- Render line/polygon layers on the globe.
- Support color, opacity, visibility, and picking.

Later:

- Convert large GeoJSON to binary mesh/line formats if performance requires it.

### ShakeMaps

Inputs:

- `data/ShakeMapPlugin/*.txt`
- `data/ShakeMapPlugin/Extra/*.cpt`

Current behavior:

- Text grids are loaded into OpenSHA gridded datasets.
- CPT palettes color MMI/PGA/PGV/etc.
- Rendered as polygon surfaces.

MVP:

- Convert ShakeMap grids into either raster textures or mesh surfaces.
- Use CPT parser to preserve colors.
- Toggle overlay opacity.

Later:

- Download live USGS ShakeMap data.
- Cache and index by event id.

## Application UX Plan

The app should open directly into the viewer.

Primary layout:

- Left sidebar: layers, search, filters.
- Center: full-viewport 3D scene.
- Right inspector: selected fault/event/layer details.
- Bottom bar: camera presets, coordinates, render mode, screenshot/share.

Core controls:

- Layer visibility toggles.
- Color swatches.
- Opacity sliders.
- Mesh/surface/wireframe segmented control.
- Search box for faults.
- Group toggles for CFM primary/alternative.
- Date/magnitude/depth filters for catalogs.
- Camera reset and named region presets.
- Pick/select object and show metadata.
- Share current scene as URL.

Avoid:

- Marketing landing page as the first screen.
- Floating card-heavy dashboard layouts.
- Explaining the UI with visible instructional text.
- Recreating Swing menu hierarchy.

## Scene State Model

Use a versioned JSON scene document.

Example:

```json
{
  "version": 1,
  "camera": {
    "position": [7513.266, -4588.568, 6246.238],
    "focalPoint": [4375.887, -2496.927, 3859.892],
    "viewUp": [-0.458, 0.277, 0.845]
  },
  "layers": [
    {
      "id": "faults.cfm5.primary.safs-safz-mjvs-san-andreas-cfm4",
      "visible": true,
      "opacity": 1.0,
      "color": "#ba55d3",
      "renderMode": "surface"
    }
  ],
  "filters": {
    "catalogs": {
      "minMagnitude": 3.0,
      "maxDepthKm": 30
    }
  }
}
```

Scene state should be stored in:

- URL query or hash for shareable lightweight state.
- API/database for named saved scenes.
- Local browser storage for draft work.

## API Plan

Initial API endpoints:

```text
GET  /api/health
GET  /api/manifest
GET  /api/layers
GET  /api/faults
GET  /api/faults/{fault_id}
GET  /api/catalogs
GET  /api/catalogs/{catalog_id}/events
POST /api/scenes
GET  /api/scenes/{scene_id}
PUT  /api/scenes/{scene_id}
POST /api/uploads
```

The API should return metadata and filtered data. Large static mesh assets should usually be served directly as static files or from Cloud Storage.

## Deployment Plan for GCP Compute Engine

Initial deployment:

1. Build frontend static files.
2. Build API container.
3. Build a single Docker image or Docker Compose stack:
   - `web-client`: nginx/caddy serving static app and public data.
   - `api`: FastAPI/Node service.
4. Push image(s) to Artifact Registry.
5. Create a Compute Engine VM.
6. Use a startup script or cloud-init to install/run Docker and pull the container(s).
7. Reserve a static IP.
8. Configure HTTPS:
   - Caddy with automatic TLS for simple deployment, or
   - Google external HTTPS load balancer with managed certificate.
9. Add Cloud Logging/Monitoring.

Important GCP note:

- The old Compute Engine "deploy container on VM" path is deprecated in current Google docs. Use a startup script, cloud-init, Docker Compose, or a managed instance template instead.

Scaling path:

- Move converted static assets to Cloud Storage.
- Put Cloud CDN in front of assets.
- Use a managed instance group if app traffic grows.
- Move saved scenes/uploads to Cloud SQL, Firestore, or Cloud Storage.
- Consider Cloud Run later if the requirement changes away from Compute Engine.

## Milestones

### Milestone 0: Product/Parity Lock

Duration: 2 to 3 days.

Deliverables:

- Written MVP feature list.
- List of deferred features.
- Data inventory with ownership/licensing notes.
- One or two target scenes to reproduce from the desktop app.

Acceptance criteria:

- Everyone agrees what "essential functionality" means.
- We know which legacy data can be public.

### Milestone 1: Web Project Scaffold

Duration: 2 to 4 days.

Deliverables:

- `web/client` React + TypeScript + Vite app.
- `web/api` minimal backend.
- `web/convert` package skeleton.
- Dockerfile and local dev instructions.
- Basic CI/lint/test commands.

Acceptance criteria:

- `web/client` runs locally.
- API health endpoint works.
- Docker image builds.

### Milestone 2: CFM Converter Prototype

Duration: 1 to 2 weeks.

Deliverables:

- Parser for GOCAD TSurf files.
- Fault metadata extraction.
- Coordinate transform matching legacy `Transform.java`.
- `.vtp` or equivalent mesh output.
- `manifest.json` for lazy loading.

Acceptance criteria:

- One known San Andreas CFM surface renders in the browser.
- Bounds and orientation match the Java app closely.
- Picked fault shows correct name/source metadata.

### Milestone 3: Viewer MVP

Duration: 1 to 2 weeks.

Deliverables:

- vtk.js render scene.
- Camera controls and reset.
- Layer tree.
- Fault search.
- Visibility, opacity, color, wireframe/surface mode.
- Fault picking and details inspector.
- CFM primary group loading.

Acceptance criteria:

- User can open the web app and explore CFM faults without Java.
- Faults load lazily enough to keep startup fast.
- A shared URL can reproduce visible layers and camera position.

### Milestone 4: Maps, Boundaries, and Catalogs

Duration: 2 to 4 weeks.

Deliverables:

- Preset map texture layers.
- Graticule and political boundary layers.
- Earthquake catalog converter.
- Catalog filtering by magnitude, depth, date, and region.
- Point/sphere rendering with color gradients.

Acceptance criteria:

- User can combine faults, maps, boundaries, and earthquakes in one scene.
- Browser remains responsive with representative catalog sizes.

### Milestone 5: Saved Scenes and Public Deployment

Duration: 1 to 2 weeks.

Deliverables:

- Saved scene API.
- Shareable public scene links.
- Docker deployment to Compute Engine.
- HTTPS endpoint.
- Basic monitoring/logging.
- Deployment runbook.

Acceptance criteria:

- App is available from a public URL.
- A saved scene can be opened by another user.
- Restarting the VM does not lose saved scenes.

### Milestone 6: Post-MVP Enhancements

Duration: ongoing.

Candidate enhancements:

- User uploads for `.ts`, `.vtk`, `.vtp`, `.geojson`, `.cat`.
- ShakeMap overlays.
- OpenSHA precomputed datasets.
- UCERF rupture visualization.
- Timeline and animation.
- Browser screenshot/export.
- Server-side high-res rendering.
- User accounts and private scenes.

## Testing and Validation Plan

### Converter Tests

Test:

- TSurf vertex parsing.
- Triangle parsing.
- `ATOM` alias handling.
- Hex and numeric color parsing.
- UTM to lat/lon conversion.
- Lat/lon/depth to XYZ conversion.
- Metadata extraction from filenames.

Golden files:

- Select 3 to 5 representative CFM faults.
- Store expected metadata, bounds, vertex counts, and triangle counts.

### Visual Regression

Use Playwright screenshots for:

- Empty app load.
- Single San Andreas fault.
- CFM primary group.
- Fault + map + graticule.
- Catalog points with magnitude gradient.

Compare:

- Nonblank canvas.
- Camera framing.
- Object count/layer count.
- No overlapping UI.
- Mobile and desktop viewports.

### Scientific/Geometry Validation

Validate:

- Known fault appears in expected region.
- Surface dips into Earth correctly.
- Depth sign matches legacy display.
- Lat/lon bounds match CFM metadata.
- Map texture bounds align with known geography.
- Catalog events appear at correct locations and depths.

### Performance Targets

Initial targets:

- First app load under 3 seconds on a normal broadband connection, excluding optional large layers.
- Initial viewer interactive within 1 second after JS load.
- Single fault load under 1 second.
- CFM group load progressively rather than blocking the UI.
- Browser memory below 1 GB for common scenes.

Optimization options:

- Lazy load by group and viewport.
- Mesh compression.
- Binary array formats.
- Level-of-detail meshes.
- Web workers for parsing.
- Precomputed bounding boxes and search index.

## Risk Register

### Data Rights and Attribution

Risk:

- Some CFM, maps, GIS, Google/WMS-derived, or third-party data may have public redistribution restrictions.

Mitigation:

- Inventory every public asset.
- Add citations and licenses to metadata.
- Replace questionable map assets with public-domain or properly licensed sources.

### Coordinate Drift

Risk:

- The old transform is custom and may not match modern WGS84 expectations.

Mitigation:

- Preserve legacy transform for MVP.
- Add WGS84 mode only after visual/scientific comparison.
- Document units and depth conventions.

### Large Mesh Performance

Risk:

- Loading all CFM surfaces at once could stall the browser.

Mitigation:

- Manifest-first loading.
- Lazy load selected groups.
- Use binary formats and mesh compression.
- Add LOD for all-fault overview.

### OpenSHA Parity

Risk:

- Some OpenSHA plugins are computational tools, not just visualization layers.

Mitigation:

- Treat OpenSHA as phase 2/3.
- Start with precomputed outputs.
- Add server-side Java or Python workers only for workflows that truly need computation.

### Legacy Java Serialization

Risk:

- Existing `.dat` catalog files are Java object streams and are not a good web format.

Mitigation:

- Prefer source `.cat` text parsing.
- Write one-time Java extractors if needed.
- Store web catalogs as Arrow/Parquet/JSONL.

### Deployment Complexity

Risk:

- Compute Engine is flexible but more operational work than Cloud Run.

Mitigation:

- Keep one Docker Compose stack first.
- Add startup script and restart policy.
- Move to managed instance groups or Cloud Run only when needed.

## First Implementation Tasks

1. Create `web/` scaffold.
2. Add local dev instructions.
3. Implement `convert/scecvdo_convert/common/transform.py` matching `Transform.java`.
4. Implement TSurf parser for `VRTX`, `PVRTX`, `TRGL`, `ATOM`, and `*solid*color`.
5. Convert one CFM fault to `.vtp` plus metadata JSON.
6. Build vtk.js viewer that loads that one fault.
7. Add camera reset using current default camera from `MainGUI.java`.
8. Add layer visibility and opacity controls.
9. Add picking and inspector panel.
10. Convert a small group of CFM faults.
11. Add generated `manifest.json`.
12. Add Dockerfile and local static serving.

## Suggested MVP Cut

The first public demo should include:

- CFM5 primary faults.
- California/Southern California map preset.
- Graticule.
- Political boundaries.
- Fault search.
- Fault picking/details.
- Color/opacity/wireframe controls.
- Camera presets.
- Shareable URL.

This would already be valuable and much easier to maintain than the current installable desktop app.

## References

- vtk.js documentation: https://kitware.github.io/vtk-js/docs/index.html
- VTK file formats: https://docs.vtk.org/en/latest/vtk_file_formats
- GCP Compute Engine containers: https://cloud.google.com/compute/docs/containers/deploying-containers
- GCP Artifact Registry Docker images: https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling
