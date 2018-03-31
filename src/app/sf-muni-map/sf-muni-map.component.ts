import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import { SfMuniMapService } from "@they/sf-muni-map/sf-muni-map.service"
import { LineString } from "geojson"
import { Observable } from "rxjs/Observable"
import { map } from "rxjs/operators"

@Component({
    selector: "they-sf-muni-map",
    template: `
        <svg they-map projection="albers" [scale]="[190000]" rotate="" center="" translate="">
            <g [theyMapStreet]="street" *ngFor="let street of streets$ | async"></g>
        </svg>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfMuniMapComponent implements OnInit {

    public streets$: Observable<LineString[]> = this.muniMap.streets$.pipe(
        map(streets => streets.features.concat().map(feature => feature.geometry)),
    )

    constructor(private muniMap: SfMuniMapService) {}

    public ngOnInit(): void {
        //
    }
}
