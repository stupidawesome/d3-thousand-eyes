import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapFreewayComponent } from "@they/shared/map/map-freeway/map-freeway.component"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [MapFreewayComponent],
    exports: [MapFreewayComponent],
    entryComponents: [MapFreewayComponent],
})
export class MapFreewayModule {}
