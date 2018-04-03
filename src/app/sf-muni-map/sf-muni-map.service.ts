import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "@they/environment"
import { RouteList } from "@they/sf-muni-map/interfaces/route-list.interface"
import { VehicleLocations } from "@they/sf-muni-map/interfaces/vehicle-location.interface"
import { Observable } from "rxjs/Observable"
import { GeometryCollection, Topology } from "topojson"

const { sfmaps } = environment.endpoints

@Injectable()
export class SfMuniMapService {
    public arteries$: Observable<Topology<{arteries: GeometryCollection}>>
        = this.http.get<Topology<{arteries: GeometryCollection}>>(sfmaps.arteries)

    public freeways$: Observable<Topology<{freeways: GeometryCollection}>>
        = this.http.get<Topology<{freeways: GeometryCollection}>>(sfmaps.freeways)

    public neighborhoods$: Observable<Topology<{neighborhoods: GeometryCollection}>>
        = this.http.get<Topology<{neighborhoods: GeometryCollection}>>(sfmaps.neighborhoods)

    public streets$: Observable<Topology<{streets: GeometryCollection}>>
        = this.http.get<Topology<{streets: GeometryCollection}>>(sfmaps.streets)

    public routeList$: Observable<RouteList> = this.http.get<RouteList>(sfmaps.routeList)

    public vehicleLocations$: Observable<VehicleLocations> = this.http.get<VehicleLocations>(sfmaps.vehicleLocations)

    constructor(private http: HttpClient) {}
}
