import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { GeoPathModule } from "@they/shared/map/geo-path/geo-path.module"
import { MapNeigborhoodComponent } from "@they/shared/map/map-neigborhood/map-neigborhood.component"

@NgModule({
    imports: [
        CommonModule,
        GeoPathModule,
    ],
    declarations: [MapNeigborhoodComponent],
    exports: [MapNeigborhoodComponent],
    entryComponents: [MapNeigborhoodComponent],
})
export class MapNeigborhoodModule {}
