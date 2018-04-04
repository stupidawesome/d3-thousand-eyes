import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapLandmarkComponent } from "@they/shared/map/map-landmark/map-landmark.component"
import { MapLandmarkDirective } from "@they/shared/map/map-landmark/map-landmark.directive"
import { MapPipesModule } from "@they/shared/map/map-pipes/map-pipes.module"

@NgModule({
    imports: [
        CommonModule,
        MapPipesModule,
    ],
    declarations: [MapLandmarkComponent, MapLandmarkDirective],
    exports: [MapLandmarkComponent],
})
export class MapLandmarkModule {}
