import {
    ChangeDetectionStrategy,
    Component, ContentChildren,
    Input,
    OnChanges, OnInit,
    QueryList,
    SimpleChanges,
    TemplateRef,
    ViewChildren,
} from "@angular/core"
import { MapFeatureComponent } from "@they/shared/map/map-feature/map-feature.component"
import { MapFeatureDirective } from "@they/shared/map/map-feature/map-feature.directive"
import { MapZoom } from "@they/shared/map/map-zoom/map-zoom.directive"
import { geoAlbers, GeoPath, geoPath, GeoPermissibleObjects, GeoProjection } from "d3-geo"

export interface MapOptions {
    scale: number
    rotate: [number, number]
    center: [number, number]
    translate: [number, number]
    projection: GeoProjection
    scaleExtent: [number, number]
}

const defaults: MapOptions = {
    scale: 500000,
    rotate: [122.4194, 0], // longitude (up/down)
    center: [0, 37.7749], // latitude (left/right)
    translate: [300, 200],
    projection: geoAlbers(),
    scaleExtent: [2, 12],
}

@Component({
    selector: "they-map",
    template: `
        <svg [theyMapZoom]="scaleExtent" (zoom)="handleZoom($event)" #svg>
            <svg:g [attr.transform]="mapZoom.transform">
                <ng-container
                    *ngFor="let feature of features"
                    [ngTemplateOutlet]="feature.template"
                    [ngTemplateOutletContext]="{ mapZoom: mapZoom, path: path }"
                ></ng-container>
            </svg:g>
        </svg>
    `,
    styles: [`
        svg {
            width: 100%;
            height: 100%;
            transform-origin: 0 0;
            transform: translate3d(0, 0, 0);
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit, OnChanges, MapOptions {

    @Input()
    public scale: number = defaults.scale

    @Input()
    public rotate: [number, number] = defaults.rotate

    @Input()
    public center: [number, number] = defaults.center

    @Input()
    public translate: [number, number] = defaults.translate

    @Input()
    public projection: GeoProjection = defaults.projection

    @Input()
    public scaleExtent: [number, number] = defaults.scaleExtent

    public mapZoom: MapZoom

    public path: GeoPath<this, GeoPermissibleObjects>

    @ContentChildren(MapFeatureComponent)
    public features: QueryList<MapFeatureComponent>

    public ngOnInit(): void {
        this.configureMapProjection()
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.configureMapProjection()
    }

    public handleZoom(event: MapZoom): void {
        this.mapZoom = event
    }

    private configureMapProjection(): void {
        const {scale, rotate, center, translate, projection: proj} = this

        this.projection = proj
            .scale(scale)
            .rotate(rotate)
            .center(center)
            .translate(translate)

        this.path = geoPath(this.projection)
    }
}
