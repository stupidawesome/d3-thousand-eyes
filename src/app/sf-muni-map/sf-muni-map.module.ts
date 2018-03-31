import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { SfMuniMapRoutingModule } from "@they/sf-muni-map/sf-muni-map-routing.module"
import { SfMuniMapComponent } from "@they/sf-muni-map/sf-muni-map.component"
import { SfMuniMapService } from "@they/sf-muni-map/sf-muni-map.service"
import { MapModule } from "@they/shared/map/map.module"

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SfMuniMapRoutingModule,
        MapModule,
    ],
    declarations: [SfMuniMapComponent],
    providers: [SfMuniMapService],
})
export class SfMuniMapModule {}
