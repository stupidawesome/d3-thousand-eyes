import { Pipe, PipeTransform } from "@angular/core"
import { filterVisibleCollection } from "app/shared/map/map-utils"
import { VisibleBounds } from "app/shared/map/map-zoom/map-zoom.directive"
import { GeoPath } from "d3-geo"
import { FeatureCollection, GeometryObject } from "geojson"

@Pipe({
    name: "visibleBounds",
    pure: true,
})
export class VisibleBoundsPipe implements PipeTransform {

    public transform(
        sourceCollection: FeatureCollection<GeometryObject>,
        path: GeoPath<void, GeometryObject>,
        visibleBounds: VisibleBounds,
    ): FeatureCollection<GeometryObject> {
        return filterVisibleCollection(sourceCollection, path, visibleBounds)
    }
}
