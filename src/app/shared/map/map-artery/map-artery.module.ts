import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapArteryComponent } from "@they/shared/map/map-artery/map-artery.component"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [MapArteryComponent],
    exports: [MapArteryComponent],
    entryComponents: [MapArteryComponent],
})
export class MapArteryModule {}
