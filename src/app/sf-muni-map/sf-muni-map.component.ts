import { ChangeDetectionStrategy, Component } from "@angular/core"
import { Vehicle } from "@they/interfaces/vehicle-location.interface"
import { SfMuniMapService, SfMuniTopology } from "@they/sf-muni-map/sf-muni-map.service"
import { Observable } from "rxjs/Observable"
import { empty } from "rxjs/observable/empty"
import { of } from "rxjs/observable/of"
import { zip } from "rxjs/observable/zip"
import { catchError, map, shareReplay } from "rxjs/operators"

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
            <they-map-landmark
                *ngFor="let vehicle of vehicles$ | async; trackBy: trackById"
                [plot]="[vehicle.lon, vehicle.lat]"
            >
                <svg class="bus" they-bus (click)="didClickVehicle(vehicle)"></svg>
            </they-map-landmark>
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
            position: relative;
            height: 100%;
            width: 100%;
        }

        .bus {
            width: 20px;
            height: 20px;
            transform: translate(-50%, -50%);
            transform-origin: 0 0;
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
        catchError((e) => {
            console.error(`Couldn't load map`, e)

            return empty()
        }),
        map(propertiesToTopology),
        shareReplay(),
    )

    public vehicles$: Observable<Vehicle[]> = this.muniMap.vehicles$.pipe(
        catchError((e) => {
            console.error(`Couldn't load vehicles`, e)

            return of([])
        }),
        shareReplay(),
    )

    constructor(private muniMap: SfMuniMapService) {}

    public didClickVehicle(vehicle: Vehicle): void {
        // tslint:disable-next-line no-console
        console.log("Clicked a bus", vehicle)
    }

    public trackById(vehicle: Vehicle): string {
        return vehicle.id
    }
}
