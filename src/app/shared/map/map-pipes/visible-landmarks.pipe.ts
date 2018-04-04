import { Pipe, PipeTransform } from "@angular/core"
import { MapLandmarkComponent } from "@they/shared/map/map-landmark/map-landmark.component"
import { MapZoom } from "@they/shared/map/map-zoom/map-zoom.directive"
import { intersectPoint } from "@they/util/line-intersects-rect"
import { isNullOrUndefined } from "@they/util/util"
import { GeoProjection } from "d3-geo"

@Pipe({
    name: "visibleLandmarks",
    // change detection not working with pure pipe yet
    pure: false,
})
export class VisibleLandmarksPipe implements PipeTransform {

    public transform(
        landmarks: MapLandmarkComponent[] | null,
        {visibleBounds, transform}: MapZoom,
        projection: GeoProjection,
    ): MapLandmarkComponent[] {

        const topLeft = transform.translate(visibleBounds[0][0], visibleBounds[0][1])
        const bottomRight = transform.translate(visibleBounds[1][0], visibleBounds[1][1])

        const visibleRect = {
            left: topLeft.x,
            top: topLeft.y,
            right: bottomRight.x,
            bottom: bottomRight.y,
        }

        return isNullOrUndefined(landmarks)
            ? []
            : landmarks.filter((land) => {
                const coords = projection(land.plot)

                if (isNullOrUndefined(coords)) {
                    return true
                } else {
                    const point = transform.translate(coords[0], coords[1])

                    return intersectPoint(point, visibleRect)
                }
            })
    }
}
