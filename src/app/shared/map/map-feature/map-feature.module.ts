import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapPipesModule } from "@they/shared/map-pipes/map-pipes.module"
import { MapFeatureComponent } from "@they/shared/map/map-feature/map-feature.component"
import { MapFeatureDirective } from "@they/shared/map/map-feature/map-feature.directive"

@NgModule({
    imports: [
        CommonModule,
        MapPipesModule,
    ],
    declarations: [MapFeatureComponent, MapFeatureDirective],
    exports: [MapFeatureComponent],
})
export class MapFeatureModule {}
