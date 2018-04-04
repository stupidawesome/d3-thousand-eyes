import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { SvgBusComponent } from "@they/shared/svg/svg-bus.component"

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SvgBusComponent],
    exports: [SvgBusComponent],
})
export class SvgModule {}
