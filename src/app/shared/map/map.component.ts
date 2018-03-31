import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit } from "@angular/core"
import { MapService } from "@they/shared/map/map.service"
import { geoAlbers, GeoProjection } from "d3-geo"
import { select } from "d3-selection"

@Component({
    // tslint:disable-next-line component-selector
    selector: "svg[they-map]",
    template: `
        <ng-content></ng-content>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MapService],
})
export class MapComponent implements OnInit, OnChanges, OnDestroy {

    @Input()
    public scale: number

    @Input()
    public rotate: [number, number]

    @Input()
    public center: [number, number]

    @Input()
    public translate: [number, number]

    @Input()
    public projection: GeoProjection = geoAlbers()

    constructor(private map: MapService, private el: ElementRef) {}

    public ngOnInit(): void {
        this.map.create(this.el.nativeElement)
    }

    public ngOnChanges(): void {
        this.map.update()
    }

    public ngOnDestroy(): void {
        this.map.destroy()
    }
}
