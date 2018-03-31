import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"

@Component({
    // tslint:disable-next-line disable component-selector
    selector: "g[they-map-neigborhood]",
    template: `
        <p>
            d3-neigborhood works!
        </p>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapNeigborhoodComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
