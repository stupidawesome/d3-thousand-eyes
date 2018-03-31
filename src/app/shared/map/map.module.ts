import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapArteryModule } from "@they/shared/map/map-artery/map-artery.module"
import { MapFreewayModule } from "@they/shared/map/map-freeway/map-freeway.module"
import { MapNeigborhoodModule } from "@they/shared/map/map-neigborhood/map-neigborhood.module"
import { MapStreetModule } from "@they/shared/map/map-street/map-street.module"
import { MapVehicleModule } from "@they/shared/map/map-vehicle/map-vehicle.module"
import { MapComponent } from "@they/shared/map/map.component"

@NgModule({
    imports: [
        CommonModule,
        MapArteryModule,
        MapFreewayModule,
        MapNeigborhoodModule,
        MapStreetModule,
        MapVehicleModule,
    ],
    declarations: [MapComponent],
    exports: [
        MapComponent,
        MapArteryModule,
        MapFreewayModule,
        MapNeigborhoodModule,
        MapStreetModule,
        MapVehicleModule,
    ],
})
export class MapModule {}
