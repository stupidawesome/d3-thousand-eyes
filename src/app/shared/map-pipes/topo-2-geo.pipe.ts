import { Pipe, PipeTransform } from "@angular/core"
import { simplifyTopology } from "@they/shared/map/map-utils"
import { FeatureCollection, GeometryObject } from "geojson"
import { feature, GeometryCollection, planarTriangleArea, Topology } from "topojson"

@Pipe({
    name: "topo2Geo",
    pure: true,
})
export class Topo2GeoPipe implements PipeTransform {
    public transform(topology: Topology<{ collection: GeometryCollection }>, zoom: number = 1): FeatureCollection<GeometryObject> {
        // We want to omit features that are too small to see at the given zoom level
        const simplified = simplifyTopology(topology, planarTriangleArea, 1 / Math.pow(10, (zoom + 5)))

        return feature(simplified, simplified.objects.collection)
    }
}
