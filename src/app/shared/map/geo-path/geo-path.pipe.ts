import { Pipe, PipeTransform } from "@angular/core"
import { geoPath, GeoProjection } from "d3-geo"
import { LineString } from "geojson"

@Pipe({
    name: "geoPath",
    pure: true,
})
export class GeoPathPipe implements PipeTransform {
    public transform(geometry: LineString, projection?: GeoProjection): string | null {
        return geoPath(projection)(geometry)
    }
}
