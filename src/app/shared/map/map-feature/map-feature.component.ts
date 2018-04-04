import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from "@angular/core"
import { MapFeatureDirective } from "@they/shared/map/map-feature/map-feature.directive"
import { GeometryCollection, Topology } from "topojson"

const defaults = {
    stroke: "#000000",
    fill: "none",
    strokeWidth: 1,
    scaleExtent: [0, Infinity],
}

@Component({
    selector: "they-map-feature",
    template: `
        <ng-container *theyMapFeature="let mapZoom = mapZoom; let path = path">
            <svg:path
                *ngIf="mapZoom.transform.k >= scaleExtent[0] && mapZoom.transform.k <= scaleExtent[1]"
                [style.stroke]="stroke"
                [style.fill]="fill"
                [style.stroke-width.px]="strokeWidth / mapZoom.transform.k"
                [attr.d]="topology | topo2Geo: mapZoom.transform.k | visibleBounds: path: mapZoom.visibleBounds | geoPath: path"
            ></svg:path>
        </ng-container>
    `,
    styles: [`
        path {
            stroke-linejoin: round;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapFeatureComponent {
    @Input()
    public topology: Topology<{ collection: GeometryCollection }>

    @Input()
    public stroke: string = defaults.stroke

    @Input()
    public fill: string = defaults.fill

    @Input()
    public strokeWidth: number = defaults.strokeWidth

    @Input()
    public scaleExtent: [number, number] = <[number, number]>defaults.scaleExtent

    @ViewChild(MapFeatureDirective, {read: TemplateRef})
    public template: TemplateRef<void>
}
