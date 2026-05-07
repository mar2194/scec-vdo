# SCEC-VDO Web MVP

This directory is the local-first start of the web migration described in
`docs/web-app-migration-plan.md`.

The current slice intentionally stays small:

- `client/` serves a browser fault viewer.
- `convert/` converts a curated CFM5 TSurf sample into web mesh JSON.
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

## Notes

This first viewer uses a dependency-free WebGL renderer so the project can be
run locally before package and deployment decisions harden. The planned
React/TypeScript/Vite/vtk.js stack can be layered into `client/` next without
changing the generated `public-data/faults/manifest.json` boundary.
