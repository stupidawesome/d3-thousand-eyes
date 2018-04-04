import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapPipesModule } from "@they/shared/map/map-pipes/map-pipes.module"
import { MapZoomDirective } from "@they/shared/map/map-zoom/map-zoom.directive"

@NgModule({
    imports: [
        CommonModule,
        MapPipesModule,
    ],
    declarations: [MapZoomDirective],
    exports: [MapZoomDirective],
})
export class MapZoomModule {}
