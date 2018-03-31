import { ChangeDetectionStrategy, Component, Input } from "@angular/core"
import { LineString } from "geojson"

@Component({
    // tslint:disable-next-line disable component-selector
    selector: "g[theyMapStreet]",
    template: `
        <svg:path [attr.d]="theyMapStreet | geoPath"></svg:path>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapStreetComponent {
    @Input()
    public theyMapStreet: LineString
}
