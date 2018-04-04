import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapFeatureModule } from "@they/shared/map/map-feature/map-feature.module"
import { MapLandmarkModule } from "@they/shared/map/map-landmark/map-landmark.module"
import { MapPipesModule } from "@they/shared/map/map-pipes/map-pipes.module"
import { MapZoomModule } from "@they/shared/map/map-zoom/map-zoom.module"
import { MapComponent } from "@they/shared/map/map.component"

@NgModule({
    imports: [
        CommonModule,
        MapZoomModule,
        MapPipesModule,
        MapFeatureModule,
        MapLandmarkModule,
    ],
    declarations: [MapComponent],
    exports: [
        MapComponent,
        MapFeatureModule,
        MapLandmarkModule,
    ],
})
export class MapModule {}
