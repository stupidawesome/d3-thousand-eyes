import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"

@Component({
    // tslint:disable-next-line disable component-selector
    selector: "g[they-map-freeway]",
    template: `
        <p>
            d3-freeway works!
        </p>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapFreewayComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
