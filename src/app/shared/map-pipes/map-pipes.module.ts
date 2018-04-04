import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ApplyZoomPipe } from "@they/shared/map-pipes/apply-zoom.pipe"
import { GeoPathPipe } from "@they/shared/map-pipes/geo-path.pipe"
import { Topo2GeoPipe } from "@they/shared/map-pipes/topo-2-geo.pipe"
import { VisibleBoundsPipe } from "@they/shared/map-pipes/visible-bounds.pipe"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [VisibleBoundsPipe, Topo2GeoPipe, ApplyZoomPipe, GeoPathPipe],
    exports: [VisibleBoundsPipe, Topo2GeoPipe, ApplyZoomPipe, GeoPathPipe],
})
export class MapPipesModule {}
