import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { GeoPathModule } from "@they/shared/map/geo-path/geo-path.module"
import { MapFreewayComponent } from "@they/shared/map/map-freeway/map-freeway.component"

@NgModule({
    imports: [
        CommonModule,
        GeoPathModule,
    ],
    declarations: [MapFreewayComponent],
    exports: [MapFreewayComponent],
    entryComponents: [MapFreewayComponent],
})
export class MapFreewayModule {}
