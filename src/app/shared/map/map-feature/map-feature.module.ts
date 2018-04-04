import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapFeatureComponent } from "@they/shared/map/map-feature/map-feature.component"
import { MapFeatureDirective } from "@they/shared/map/map-feature/map-feature.directive"
import { MapPipesModule } from "@they/shared/map/map-pipes/map-pipes.module"

@NgModule({
    imports: [
        CommonModule,
        MapPipesModule,
    ],
    declarations: [MapFeatureComponent, MapFeatureDirective],
    exports: [MapFeatureComponent, MapFeatureDirective],
})
export class MapFeatureModule {}
