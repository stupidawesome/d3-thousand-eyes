import { Pipe, PipeTransform } from "@angular/core"
import { GeoPath, GeoPermissibleObjects } from "d3-geo"
import { LineString } from "geojson"

@Pipe({
    name: "geoPath",
    pure: true,
})
export class GeoPathPipe implements PipeTransform {
    public transform(geometry: LineString, path: GeoPath<void, GeoPermissibleObjects>): string | null {
        return path(geometry)
    }
}
