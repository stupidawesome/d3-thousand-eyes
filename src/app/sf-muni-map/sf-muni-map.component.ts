import { ChangeDetectionStrategy, Component } from "@angular/core"
import { SfMuniMapService } from "@they/sf-muni-map/sf-muni-map.service"
import { Observable } from "rxjs/Observable"
import { GeometryCollection, Topology } from "topojson"

@Component({
    selector: "they-sf-muni-map",
    template: `
        <they-map
            [streets]="streets$ | async"
            [neighbourhoods]="neighborhoods$ | async"
            [arteries]="arteries$ | async"
            [freeways]="freeways$ | async"
        ></they-map>
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

    public streets$: Observable<Topology<{ streets: GeometryCollection }>> = this.muniMap.streets$

    public arteries$: Observable<Topology<{ arteries: GeometryCollection }>> = this.muniMap.arteries$

    public neighborhoods$: Observable<Topology<{ neighborhoods: GeometryCollection }>> = this.muniMap.neighborhoods$

    public freeways$: Observable<Topology<{ freeways: GeometryCollection }>> = this.muniMap.freeways$

    constructor(private muniMap: SfMuniMapService) {}
}
