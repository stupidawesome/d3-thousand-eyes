import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { GeoPathModule } from "@they/shared/map/geo-path/geo-path.module"
import { MapStreetComponent } from "@they/shared/map/map-street/map-street.component"

@NgModule({
    imports: [
        CommonModule,
        GeoPathModule,
    ],
    declarations: [MapStreetComponent],
    exports: [MapStreetComponent],
    entryComponents: [MapStreetComponent],
})
export class MapStreetModule {}
