import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { PlotTransformPipe } from "@they/shared/map/map-pipes/plot-transform.pipe"
import { VisibleLandmarksPipe } from "@they/shared/map/map-pipes/visible-landmarks.pipe"
import { ApplyZoomPipe } from "app/shared/map/map-pipes/apply-zoom.pipe"
import { GeoPathPipe } from "app/shared/map/map-pipes/geo-path.pipe"
import { Topo2GeoPipe } from "app/shared/map/map-pipes/topo-2-geo.pipe"
import { VisibleBoundsPipe } from "app/shared/map/map-pipes/visible-bounds.pipe"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [VisibleBoundsPipe, Topo2GeoPipe, ApplyZoomPipe, GeoPathPipe, PlotTransformPipe, VisibleLandmarksPipe],
    exports: [VisibleBoundsPipe, Topo2GeoPipe, ApplyZoomPipe, GeoPathPipe, PlotTransformPipe, VisibleLandmarksPipe],
})
export class MapPipesModule {}
