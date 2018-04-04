import { Pipe, PipeTransform } from "@angular/core"
import { DomSanitizer, SafeStyle } from "@angular/platform-browser"
import { MapZoom } from "@they/shared/map/map-zoom/map-zoom.directive"
import { isNullOrUndefined } from "@they/util/util"
import { GeoProjection } from "d3-geo"

@Pipe({
    name: "plotTransform",
    pure: true,
})
export class PlotTransformPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}

    public transform(latLon: [number, number], projection: GeoProjection, zoom: MapZoom): SafeStyle {
        const coords = projection(latLon)

        if (isNullOrUndefined(coords)) {
            return ""
        } else {
            const {x, y} = zoom.transform.translate(coords[0], coords[1])

            return this.sanitizer.bypassSecurityTrustStyle(`translate(${x}px, ${y}px)`)
        }
    }
}
