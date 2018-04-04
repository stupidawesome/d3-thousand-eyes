import { ChangeDetectionStrategy, Component } from "@angular/core"
import { VehicleLocations } from "@they/sf-muni-map/interfaces/vehicle-location.interface"
import { SfMuniMapService, SfMuniTopology } from "@they/sf-muni-map/sf-muni-map.service"
import { Observable } from "rxjs/Observable"
import { zip } from "rxjs/observable/zip"
import { map, shareReplay } from "rxjs/operators"

interface FeatureProperties {
    stroke: string
    strokeWidth: number
    fill: string
    scaleExtent: [number, number]
}

type MapFeature = FeatureProperties & { topology: SfMuniTopology }

const featureProperties: FeatureProperties[] = [
    {
        stroke: "white",
        strokeWidth: 4,
        fill: "lightgreen",
        scaleExtent: [0, Infinity],
    },
    {
        stroke: "grey",
        strokeWidth: 2,
        fill: "none",
        scaleExtent: [4, Infinity],
    },
    {
        stroke: "dodgerblue",
        strokeWidth: 2,
        fill: "none",
        scaleExtent: [0, Infinity],
    },
    {
        stroke: "darkorange",
        strokeWidth: 4,
        fill: "none",
        scaleExtent: [0, Infinity],
    },
]

function propertiesToTopology(topology: SfMuniTopology[]): MapFeature[] {
    return featureProperties.map(
        (properties, index) => ({topology: topology[index], ...properties}),
    )
}

@Component({
    selector: "they-sf-muni-map",
    template: `
        <they-map *ngIf="map$ | async as map">
            <they-map-feature
                *ngFor="let feature of map"
                [topology]="feature.topology"
                [stroke]="feature.stroke"
                [strokeWidth]="feature.strokeWidth"
                [fill]="feature.fill"
                [scaleExtent]="feature.scaleExtent"
            ></they-map-feature>
        </they-map>
    `,
    styles: [`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfMuniMapComponent {

    public map$: Observable<MapFeature[]> = zip(
        this.muniMap.neighborhoods$,
        this.muniMap.streets$,
        this.muniMap.arteries$,
        this.muniMap.freeways$,
    ).pipe(
        map(propertiesToTopology),
        shareReplay(),
    )

    public vehicles$: Observable<VehicleLocations>

    constructor(private muniMap: SfMuniMapService) {}
}
