import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapPipesModule } from "@they/shared/map-pipes/map-pipes.module"
import { MapFeatureModule } from "@they/shared/map/map-feature/map-feature.module"
import { MapZoomModule } from "@they/shared/map/map-zoom/map-zoom.module"
import { MapComponent } from "@they/shared/map/map.component"

@NgModule({
    imports: [
        CommonModule,
        MapZoomModule,
        MapPipesModule,
        MapFeatureModule,
    ],
    declarations: [MapComponent],
    exports: [
        MapComponent,
        MapFeatureModule,
    ],
})
export class MapModule {}
