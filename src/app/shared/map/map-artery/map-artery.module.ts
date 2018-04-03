import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { GeoPathModule } from "@they/shared/map/geo-path/geo-path.module"
import { MapArteryComponent } from "@they/shared/map/map-artery/map-artery.component"

@NgModule({
    imports: [
        CommonModule,
        GeoPathModule,
    ],
    declarations: [MapArteryComponent],
    exports: [MapArteryComponent],
    entryComponents: [MapArteryComponent],
})
export class MapArteryModule {}
