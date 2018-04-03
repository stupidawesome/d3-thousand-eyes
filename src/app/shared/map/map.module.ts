import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { GeoPathModule } from "@they/shared/map/geo-path/geo-path.module"
import { MapArteryModule } from "@they/shared/map/map-artery/map-artery.module"
import { MapFreewayModule } from "@they/shared/map/map-freeway/map-freeway.module"
import { MapNeigborhoodModule } from "@they/shared/map/map-neigborhood/map-neigborhood.module"
import { MapStreetModule } from "@they/shared/map/map-street/map-street.module"
import { MapVehicleModule } from "@they/shared/map/map-vehicle/map-vehicle.module"
import { MapZoomModule } from "@they/shared/map/map-zoom/map-zoom.module"
import { MapComponent } from "@they/shared/map/map.component"

@NgModule({
    imports: [
        CommonModule,
        MapArteryModule,
        MapFreewayModule,
        MapNeigborhoodModule,
        MapStreetModule,
        MapVehicleModule,
        GeoPathModule,
        MapZoomModule,
    ],
    declarations: [MapComponent],
    exports: [
        MapComponent,
    ],
})
export class MapModule {}
