import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"

@Component({
    // tslint:disable-next-line disable component-selector
    selector: "g[they-map-artery]",
    template: `
        <p>
            d3-artery works!
        </p>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapArteryComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
