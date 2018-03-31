import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapVehicleComponent } from "@they/shared/map/map-vehicle/map-vehicle.component"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [MapVehicleComponent],
    exports: [MapVehicleComponent],
    entryComponents: [MapVehicleComponent],
})
export class MapVehicleModule {}
