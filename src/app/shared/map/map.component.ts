import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
} from "@angular/core"
import { MapZoom } from "@they/shared/map/map-zoom/map-zoom.directive"
import { geoAlbers, GeoPath, geoPath, GeoPermissibleObjects, GeoProjection } from "d3-geo"
import { GeometryCollection, Topology } from "topojson"

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
    scaleExtent: [4, 12],
}

export type VisibleAreaCoords = [[number, number], [number, number]]

@Component({
    selector: "they-map",
    template: `
        <svg [theyMapZoom]="scaleExtent" (zoom)="handleZoom($event)" #svg>
            <svg:g [attr.transform]="mapZoom.transform">
                <svg:g
                    [theyMapNeighborhood]="neighbourhoods"
                    [mapZoom]="mapZoom"
                    [path]="path"
                ></svg:g>
                <svg:g
                    [theyMapArtery]="arteries"
                    [mapZoom]="mapZoom"
                    [path]="path"
                ></svg:g>
                <svg:g
                    *ngIf="mapZoom.transform.k > 8"
                    [theyMapStreet]="streets"
                    [mapZoom]="mapZoom"
                    [path]="path"
                ></svg:g>
                <svg:g
                    [theyMapFreeway]="freeways"
                    [mapZoom]="mapZoom"
                    [path]="path"
                ></svg:g>
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
export class MapComponent implements OnChanges, MapOptions {

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
    public neighbourhoods: Topology<{ neighbourhoods: GeometryCollection }>

    @Input()
    public streets: Topology<{ streets: GeometryCollection }>

    @Input()
    public arteries: Topology<{ arteries: GeometryCollection }>

    @Input()
    public freeways: Topology<{ freeways: GeometryCollection }>

    @Input()
    public scaleExtent: [number, number] = defaults.scaleExtent

    @ViewChild("svg", {read: ElementRef})
    public svgReg: ElementRef

    public mapZoom: MapZoom

    public path: GeoPath<this, GeoPermissibleObjects>

    public ngOnChanges(changes: SimpleChanges): void {
        this.configureMapProjection()
    }

    protected handleZoom(event: MapZoom): void {
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
