#!/usr/bin/env python3
"""Convert a local CFM5 TSurf sample into browser-friendly mesh JSON."""

from __future__ import annotations

import argparse
import json
import math
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable


DEFAULT_FAULT_FILES = [
    "SAFS-SAFZ-CLCZ-San_Andreas_fault-CHLM-CFM4.ts",
    "SAFS-SAFZ-CLCZ-San_Andreas_fault-CRRZ-CFM4.ts",
    "SAFS-SAFZ-COAV-Southern_San_Andreas_fault-CFM4.ts",
    "SAFS-SAFZ-MJVS-San_Andreas_fault-CFM4.ts",
    "SAFS-SAFZ-PARK-San_Andreas_fault-CFM4.ts",
    "SAFS-SAFZ-SBMT-San_Andreas_fault-CFM4.ts",
    "SAFS-SAFZ-BSZS-Southern_San_Andreas_blind_extension-CFM4.ts",
    "PNRA-SJFZ-SBRN-San_Jacinto-Claremont_fault-CFM4.ts",
    "PNRA-SJFZ-SJCV-San_Jacinto-Claremont_fault-east-CFM4.ts",
    "PNRA-ELSZ-CYMT-Elsinore_fault-CFM4.ts",
    "PNRA-ELSZ-JULN-Elsinore_fault-north-CFM4.ts",
    "PNRA-ELSZ-JULN-Elsinore_fault-south-CFM4.ts",
    "GRFS-GRFZ-WEST-Garlock_fault-CFM5.ts",
    "GRFS-GRFZ-EAST-Garlock_fault-CFM5.ts",
    "SAFS-SAFZ-MULT-San_Andreas_fault-FUIS-CFM3.ts",
    "PNRA-ELSZ-CYMT-Elsinore_fault-CFM1.ts",
]

WGS84_A_METERS = 6378137.0
WGS84_B_METERS = 6356752.31414
UTM_SCALE = 0.9996
LEGACY_EQUATORIAL_RADIUS_KM = 6378.140
LEGACY_POLAR_RADIUS_KM = 6356.755


def repo_root() -> Path:
    return Path(__file__).resolve().parents[4]


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "fault"


def rounded(values: Iterable[float], places: int = 6) -> list[float]:
    return [round(value, places) for value in values]


def parse_color(line: str) -> str:
    value = line.split(":", 1)[1].strip()
    if value.startswith("#") and len(value) >= 7:
        return value[:7].lower()

    parts = value.split()
    if len(parts) >= 3:
        try:
            channels = [float(part) for part in parts[:3]]
        except ValueError:
            return "#c8c8c8"
        if all(0 <= channel <= 1 for channel in channels):
            channels = [channel * 255 for channel in channels]
        return "#" + "".join(f"{max(0, min(255, round(channel))):02x}" for channel in channels)

    return "#c8c8c8"


def utm_to_lat_lon(easting: float, northing: float, zone: int = 11) -> tuple[float, float]:
    """Convert UTM meters to latitude/longitude for the northern hemisphere."""

    eccentricity_sq = (WGS84_A_METERS**2 - WGS84_B_METERS**2) / WGS84_A_METERS**2
    eccentricity_prime_sq = eccentricity_sq / (1 - eccentricity_sq)
    x = easting - 500000.0
    y = northing

    longitude_origin = (zone - 1) * 6 - 180 + 3
    meridional_arc = y / UTM_SCALE
    mu = meridional_arc / (
        WGS84_A_METERS
        * (
            1
            - eccentricity_sq / 4
            - 3 * eccentricity_sq**2 / 64
            - 5 * eccentricity_sq**3 / 256
        )
    )

    e1 = (1 - math.sqrt(1 - eccentricity_sq)) / (1 + math.sqrt(1 - eccentricity_sq))
    phi1 = (
        mu
        + (3 * e1 / 2 - 27 * e1**3 / 32) * math.sin(2 * mu)
        + (21 * e1**2 / 16 - 55 * e1**4 / 32) * math.sin(4 * mu)
        + (151 * e1**3 / 96) * math.sin(6 * mu)
    )

    sin_phi1 = math.sin(phi1)
    cos_phi1 = math.cos(phi1)
    tan_phi1 = math.tan(phi1)

    n1 = WGS84_A_METERS / math.sqrt(1 - eccentricity_sq * sin_phi1**2)
    t1 = tan_phi1**2
    c1 = eccentricity_prime_sq * cos_phi1**2
    r1 = (
        WGS84_A_METERS
        * (1 - eccentricity_sq)
        / (1 - eccentricity_sq * sin_phi1**2) ** 1.5
    )
    d = x / (n1 * UTM_SCALE)

    lat = phi1 - (n1 * tan_phi1 / r1) * (
        d**2 / 2
        - (5 + 3 * t1 + 10 * c1 - 4 * c1**2 - 9 * eccentricity_prime_sq) * d**4 / 24
        + (
            61
            + 90 * t1
            + 298 * c1
            + 45 * t1**2
            - 252 * eccentricity_prime_sq
            - 3 * c1**2
        )
        * d**6
        / 720
    )
    lon = math.radians(longitude_origin) + (
        d
        - (1 + 2 * t1 + c1) * d**3 / 6
        + (
            5
            - 2 * c1
            + 28 * t1
            - 3 * c1**2
            + 8 * eccentricity_prime_sq
            + 24 * t1**2
        )
        * d**5
        / 120
    ) / cos_phi1

    return math.degrees(lat), math.degrees(lon)


def legacy_radius_for_latitude(lat: float) -> float:
    sin_lat = math.sin(math.radians(lat))
    flattening_term = (
        (LEGACY_EQUATORIAL_RADIUS_KM**2 - LEGACY_POLAR_RADIUS_KM**2)
        / LEGACY_POLAR_RADIUS_KM**2
    )
    return LEGACY_EQUATORIAL_RADIUS_KM * (1 + flattening_term * sin_lat**2) ** -0.5


def transform_lat_lon_height(lat: float, lon: float, height_km: float) -> tuple[float, float, float]:
    radius = legacy_radius_for_latitude(lat) + height_km
    clamped_lat = max(-90.0, min(90.0, lat))
    clamped_lon = max(-180.0, min(180.0, lon))
    cos_lat = math.cos(math.radians(clamped_lat))

    x = -cos_lat * math.sin(math.radians(clamped_lon)) * radius
    y = cos_lat * math.cos(math.radians(clamped_lon)) * radius
    z = math.sin(math.radians(clamped_lat)) * radius
    return x, y, z


def metadata_from_path(path: Path) -> dict[str, str]:
    stem = path.stem
    parts = stem.split("-")
    cfm_version = parts[-1] if parts and re.fullmatch(r"CFM\d+", parts[-1]) else ""
    display_tokens = parts[3:-1] if cfm_version and len(parts) > 4 else parts[3:]
    display_name = " ".join(display_tokens).replace("_", " ").strip() or stem.replace("_", " ")

    return {
        "id": slugify(stem),
        "name": display_name,
        "region": parts[0] if len(parts) > 0 else "",
        "system": parts[1] if len(parts) > 1 else "",
        "section": parts[2] if len(parts) > 2 else "",
        "cfmVersion": cfm_version,
    }


def parse_tsurf(path: Path, source_root: Path, output_group: str) -> tuple[dict, dict]:
    metadata = metadata_from_path(path)
    declared_name = ""
    color = "#c8c8c8"
    vertices: list[float] = []
    lat_lon_depth: list[float] = []
    triangles: list[int] = []
    vertex_indices_by_id: dict[int, int] = {}

    with path.open("r", encoding="utf-8", errors="replace") as stream:
        for raw_line in stream:
            line = raw_line.strip()
            if not line:
                continue

            if line.startswith("name:"):
                declared_name = line.split(":", 1)[1].strip()
                continue

            if "*solid*color:" in line:
                color = parse_color(line)
                continue

            parts = line.split()
            record_type = parts[0]
            if record_type in {"VRTX", "PVRTX"} and len(parts) >= 5:
                vertex_id = int(parts[1])
                easting = float(parts[2])
                northing = float(parts[3])
                elevation_km = float(parts[4]) / 1000.0
                lat, lon = utm_to_lat_lon(easting, northing)
                xyz = transform_lat_lon_height(lat, lon, elevation_km)
                vertex_indices_by_id[vertex_id] = len(vertices) // 3
                vertices.extend(xyz)
                lat_lon_depth.extend([lat, lon, -elevation_km])
            elif record_type == "ATOM" and len(parts) >= 3:
                vertex_id = int(parts[1])
                alias_id = int(parts[2])
                alias_index = vertex_indices_by_id.get(alias_id)
                if alias_index is None:
                    continue
                vertex_indices_by_id[vertex_id] = len(vertices) // 3
                start = alias_index * 3
                vertices.extend(vertices[start : start + 3])
                lat_lon_depth.extend(lat_lon_depth[start : start + 3])
            elif record_type == "TRGL" and len(parts) >= 4:
                triangle = []
                for point_id in parts[1:4]:
                    parsed_id = int(point_id)
                    triangle.append(vertex_indices_by_id.get(parsed_id, parsed_id - 1))
                triangles.extend(triangle)

    if not vertices or not triangles:
        raise ValueError(f"{path} did not contain renderable vertices and triangles")

    lats = lat_lon_depth[0::3]
    lons = lat_lon_depth[1::3]
    depths = lat_lon_depth[2::3]
    xs = vertices[0::3]
    ys = vertices[1::3]
    zs = vertices[2::3]

    source_path = path.relative_to(repo_root()).as_posix()
    fault_meta = {
        **metadata,
        "declaredName": declared_name,
        "group": output_group,
        "source": source_path,
        "meshPath": f"faults/{output_group}/faults/{metadata['id']}.json",
        "color": color,
        "bounds": {
            "lat": rounded([min(lats), max(lats)]),
            "lon": rounded([min(lons), max(lons)]),
            "depthKm": rounded([min(depths), max(depths)]),
            "xyz": [
                rounded([min(xs), min(ys), min(zs)]),
                rounded([max(xs), max(ys), max(zs)]),
            ],
        },
        "vertexCount": len(vertices) // 3,
        "triangleCount": len(triangles) // 3,
        "tokens": [token for token in [metadata["region"], metadata["system"], metadata["section"]] if token],
    }

    mesh = {
        "version": 1,
        "id": metadata["id"],
        "name": fault_meta["name"],
        "declaredName": declared_name,
        "group": output_group,
        "source": source_path,
        "color": color,
        "bounds": fault_meta["bounds"],
        "vertexCount": fault_meta["vertexCount"],
        "triangleCount": fault_meta["triangleCount"],
        "vertices": rounded(vertices),
        "latLonDepth": rounded(lat_lon_depth),
        "triangles": triangles,
    }
    return fault_meta, mesh


def selected_files(source_root: Path, include_all: bool) -> list[Path]:
    if include_all:
        return sorted(source_root.rglob("*.ts"))

    by_name = {path.name: path for path in source_root.rglob("*.ts")}
    missing = [name for name in DEFAULT_FAULT_FILES if name not in by_name]
    if missing:
        formatted = ", ".join(missing)
        raise FileNotFoundError(f"Missing expected CFM sample files: {formatted}")
    return [by_name[name] for name in DEFAULT_FAULT_FILES]


def group_for_path(path: Path) -> str:
    parent = path.parent.name.lower()
    return "cfm5-alt" if "alt" in parent else "cfm5-primary"


def write_json(path: Path, payload: dict, pretty: bool = False) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as stream:
        if pretty:
            json.dump(payload, stream, indent=2)
        else:
            json.dump(payload, stream, separators=(",", ":"))
        stream.write("\n")


def main() -> None:
    root = repo_root()
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source",
        type=Path,
        default=root / "data/CFM/CFM5_release_2014/tsurf",
        help="Path to the CFM5 tsurf directory.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=root / "web/public-data/faults",
        help="Output directory for generated fault assets.",
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="Convert all local CFM5 TSurf files instead of the local MVP sample.",
    )
    args = parser.parse_args()

    source_root = args.source.resolve()
    output_root = args.output.resolve()
    files = selected_files(source_root, args.all)
    generated_at = datetime.now(timezone.utc).isoformat()
    groups: dict[str, list[dict]] = {"cfm5-primary": [], "cfm5-alt": []}
    all_faults: list[dict] = []

    for tsurf_path in files:
        group_id = group_for_path(tsurf_path)
        fault_meta, mesh = parse_tsurf(tsurf_path, source_root, group_id)
        mesh_path = output_root / group_id / "faults" / f"{fault_meta['id']}.json"
        write_json(mesh_path, mesh)
        groups.setdefault(group_id, []).append(fault_meta)
        all_faults.append(fault_meta)

    group_entries = []
    for group_id, faults in groups.items():
        if not faults:
            continue
        group_name = "CFM5 Primary" if group_id == "cfm5-primary" else "CFM5 Alternative"
        group_payload = {
            "version": 1,
            "id": group_id,
            "name": group_name,
            "generatedAt": generated_at,
            "faultCount": len(faults),
            "faults": faults,
        }
        write_json(output_root / group_id / "group.json", group_payload, pretty=True)
        group_entries.append(
            {
                "id": group_id,
                "name": group_name,
                "path": f"faults/{group_id}/group.json",
                "faultCount": len(faults),
            }
        )

    default_fault_ids = [
        fault["id"]
        for fault in all_faults
        if fault["group"] == "cfm5-primary" and "San Andreas" in fault["name"]
    ][:6]

    manifest = {
        "version": 1,
        "generatedAt": generated_at,
        "source": source_root.relative_to(root).as_posix(),
        "assetKind": "cfm-tsurf-json",
        "coordinateSystem": {
            "input": "CFM5 GOCAD TSurf UTM zone 11N, WGS84 meters",
            "output": "Legacy SCEC-VDO globe XYZ kilometers from Transform.java",
        },
        "defaultFaultIds": default_fault_ids,
        "groups": group_entries,
        "faults": all_faults,
    }
    write_json(output_root / "manifest.json", manifest, pretty=True)
    print(f"Converted {len(all_faults)} faults into {output_root}")


if __name__ == "__main__":
    main()
