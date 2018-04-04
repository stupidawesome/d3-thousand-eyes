import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Input,
    OnChanges,
    OnInit,
    QueryList,
    SimpleChanges,
    TemplateRef,
} from "@angular/core"
import { MapFeatureComponent } from "@they/shared/map/map-feature/map-feature.component"
import { MapLandmarkComponent } from "@they/shared/map/map-landmark/map-landmark.component"
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
    translate: [900, 600],
    projection: geoAlbers(),
    scaleExtent: [2, 12],
}

@Component({
    selector: "they-map",
    template: `
        <svg class="layer">
            <svg:g [attr.transform]="mapZoom.transform" [theyMapZoom]="scaleExtent" (zoom)="handleZoom($event)">
                <ng-container
                    *ngFor="let feature of features"
                    [ngTemplateOutlet]="feature.template"
                    [ngTemplateOutletContext]="{ mapZoom: mapZoom, path: path, projection: projection }"
                ></ng-container>
            </svg:g>
        </svg>
        <div class="layer" [theyMapZoom]="scaleExtent" (zoom)="handleZoom($event)">
            <ng-container
                *ngFor="let landmark of landmarks.changes | async | visibleLandmarks: mapZoom: projection; trackBy: trackByTemplate"
                [ngTemplateOutlet]="landmark.template"
                [ngTemplateOutletContext]="{ mapZoom: mapZoom, path: path, projection: projection }"
            ></ng-container>
        </div>
    `,
    styles: [`
        .layer {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            transform-origin: 50% 50%;
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

    @ContentChildren(MapLandmarkComponent)
    public landmarks: QueryList<MapLandmarkComponent>

    public ngOnInit(): void {
        this.configureMapProjection()
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.configureMapProjection()
    }

    public handleZoom(event: MapZoom): void {
        this.mapZoom = event
    }

    public trackByTemplate(component: MapLandmarkComponent): TemplateRef<Element> {
        return component.template
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
