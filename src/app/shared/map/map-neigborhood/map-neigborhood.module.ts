import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MapNeigborhoodComponent } from "@they/shared/map/map-neigborhood/map-neigborhood.component"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [MapNeigborhoodComponent],
    exports: [MapNeigborhoodComponent],
    entryComponents: [MapNeigborhoodComponent],
})
export class MapNeigborhoodModule {}
