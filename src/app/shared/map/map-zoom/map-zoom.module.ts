import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ApplyZoomPipe } from "@they/shared/map/map-zoom/apply-zoom.pipe"
import { MapZoomDirective } from "@they/shared/map/map-zoom/map-zoom.directive"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [MapZoomDirective, ApplyZoomPipe],
    exports: [MapZoomDirective, ApplyZoomPipe],
})
export class MapZoomModule {}
