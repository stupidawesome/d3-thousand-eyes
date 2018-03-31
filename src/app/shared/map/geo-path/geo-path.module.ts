import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { GeoPathPipe } from "@they/shared/map/geo-path/geo-path.pipe"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [GeoPathPipe],
    exports: [GeoPathPipe],
})
export class GeoPathModule {}
