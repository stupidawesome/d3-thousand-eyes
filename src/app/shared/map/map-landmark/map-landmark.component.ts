import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from "@angular/core"
import { MapLandmarkDirective } from "@they/shared/map/map-landmark/map-landmark.directive"

const defaults = {
    stroke: "#000000",
    fill: "none",
    strokeWidth: 1,
    scaleExtent: [0, Infinity],
}

@Component({
    selector: "they-map-landmark",
    template: `
        <div
            class="landmark"
            *theyMapLandmark="let projection = projection; let mapZoom = mapZoom"
            [style.transform]="plot | plotTransform: projection: mapZoom"
        >
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .landmark {
            position: absolute;
            left: 0;
            top: 0;
            transform-origin: 50% 50%;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapLandmarkComponent {
    @Input()
    public plot: [number, number]

    @Input()
    public stroke: string = defaults.stroke

    @Input()
    public fill: string = defaults.fill

    @Input()
    public strokeWidth: number = defaults.strokeWidth

    @Input()
    public scaleExtent: [number, number] = <[number, number]>defaults.scaleExtent

    @ViewChild(MapLandmarkDirective, { read: TemplateRef })
    public template: TemplateRef<Element>
}
