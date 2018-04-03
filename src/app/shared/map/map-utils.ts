import { VisibleBounds } from "@they/shared/map/map-zoom/map-zoom.directive"
import { intersectRect } from "@they/util/line-intersects-rect"
import { GeoPath } from "d3-geo"
import { FeatureCollection, GeometryObject } from "geojson"
import { Objects, planarTriangleArea, presimplify, simplify, Topology, TriangleWeighter } from "topojson"

export function filterVisibleCollection(
    collection: FeatureCollection<GeometryObject>,
    path: GeoPath<void, GeometryObject>,
    visibleBounds: VisibleBounds,
): FeatureCollection<GeometryObject> {
    const features = collection.features.filter((feat) => {
        const bounds = path.bounds(feat.geometry)

        return intersectRect(
            {
                left: bounds[0][0],
                top: bounds[0][1],
                right: bounds[1][0],
                bottom: bounds[1][1],
            },
            {
                left: visibleBounds[0][0],
                top: visibleBounds[0][1],
                right: visibleBounds[1][0],
                bottom: visibleBounds[1][1],
            },
        )
    })

    return {
        ...collection,
        features,
    }
}

export function simplifyTopology<T extends Objects>(
    topology: Topology<T>,
    preWeight: TriangleWeighter = planarTriangleArea,
    finalWeight: number = Number.MIN_VALUE,
): Topology<T> {
    const pre = presimplify(topology, preWeight)

    return simplify(pre, finalWeight)
}
