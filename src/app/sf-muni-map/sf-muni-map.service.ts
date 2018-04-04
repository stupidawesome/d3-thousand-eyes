import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "@they/environment"
import { RouteList } from "@they/sf-muni-map/interfaces/route-list.interface"
import { VehicleLocations } from "@they/sf-muni-map/interfaces/vehicle-location.interface"
import { Observable } from "rxjs/Observable"
import { GeometryCollection, Topology } from "topojson"

const { sfmaps } = environment.endpoints

export type SfMuniTopology = Topology<{collection: GeometryCollection}>

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

    public routeList$: Observable<RouteList> = this.http.get<RouteList>(sfmaps.routeList)

    public vehicleLocations$: Observable<VehicleLocations> = this.http.get<VehicleLocations>(sfmaps.vehicleLocations)

    constructor(private http: HttpClient) {}
}
