import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
    // tslint:disable-next-line disable component-selector
    selector: "g[they-map-vehicle]",
    template: `
        <p>
            d3-vehicle works!
        </p>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapVehicleComponent {

}
