import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "@they/environment"
import { RouteList } from "@they/interfaces/route-list.interface"
import { Vehicle, VehicleLocations } from "@they/interfaces/vehicle-location.interface"
import { Observable } from "rxjs/Observable"
import { interval } from "rxjs/observable/interval"
import { merge } from "rxjs/observable/merge"
import { of } from "rxjs/observable/of"
import { map, switchMap } from "rxjs/operators"
import { GeometryCollection, Topology } from "topojson"

const {sfmaps} = environment.endpoints

const busIntervalTime = 15000

export type SfMuniTopology = Topology<{ collection: GeometryCollection }>

@Injectable()
export class SfMuniMapService {
    public arteries$: Observable<SfMuniTopology>
        = this.http.get<SfMuniTopology>(sfmaps.arteries)

    public freeways$: Observable<SfMuniTopology>
        = this.http.get<SfMuniTopology>(sfmaps.freeways)

    public neighborhoods$: Observable<SfMuniTopology>
        = this.http.get<SfMuniTopology>(sfmaps.neighborhoods)

    public streets$: Observable<SfMuniTopology>
        = this.http.get<SfMuniTopology>(sfmaps.streets)

    // Not implemented
    public routeList$: Observable<RouteList> = this.http.get<RouteList>(sfmaps.routeList)

    public vehicles$: Observable<Vehicle[]> = merge(
        interval(busIntervalTime),
        of(true),
    ).pipe(
        switchMap(() =>
            this.http.get<VehicleLocations>(`${sfmaps.vehicleLocations}`).pipe(
                map((res) => res.vehicle),
            ),
        ),
    )

    constructor(private http: HttpClient) {}
}
