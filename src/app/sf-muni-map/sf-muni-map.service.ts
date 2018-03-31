import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "@they/environment"
import { RouteList } from "@they/sf-muni-map/interfaces/route-list.interface"
import { VehicleLocations } from "@they/sf-muni-map/interfaces/vehicle-location.interface"
import { FeatureCollection, LineString, Polygon } from "geojson"
import { Observable } from "rxjs/Observable"

const { sfmaps } = environment.endpoints

type FCLS = FeatureCollection<LineString>
type FCP = FeatureCollection<Polygon>

@Injectable()
export class SfMuniMapService {
    public arteries$: Observable<FCLS> = this.http.get<FCLS>(sfmaps.arteries)

    public freeways$: Observable<FCLS> = this.http.get<FCLS>(sfmaps.freeways)

    public neighborhoods$: Observable<FCP> = this.http.get<FCP>(sfmaps.neighborhoods)

    public streets$: Observable<FCLS> = this.http.get<FCLS>(sfmaps.streets)

    public routeList$: Observable<RouteList> = this.http.get<RouteList>(sfmaps.routeList)

    public vehicleLocations$: Observable<VehicleLocations> = this.http.get<VehicleLocations>(sfmaps.vehicleLocations)

    constructor(private http: HttpClient) {}
}
