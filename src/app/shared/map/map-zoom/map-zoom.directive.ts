import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core"
import { event } from "d3"
import { select, Selection } from "d3-selection"
import { zoom, ZoomBehavior, ZoomTransform } from "d3-zoom"

export type VisibleBounds = [[number, number], [number, number]]

export interface MapZoom {
    transform: ZoomTransform,
    visibleBounds: VisibleBounds
}

function getVisibleArea(t: ZoomTransform, svg: SVGSVGElement): [[number, number], [number, number]] {
    const {width, height} = svg.getBoundingClientRect()
    const l = t.invert([0, 0])
    const r = t.invert([width, height])

    return [l, r]
}

@Directive({
    selector: "[theyMapZoom]",
    exportAs: "theyMapZoom",
})
export class MapZoomDirective implements OnInit, OnChanges {
    @Output()
    public zoom: EventEmitter<MapZoom> = new EventEmitter<MapZoom>()

    @Input()
    public theyMapZoom: [number, number] = [1, 1]

    public transform: ZoomTransform

    private zoomBehaviour: ZoomBehavior<Element, {}> = zoom()
        .scaleExtent(this.theyMapZoom)
        .on("zoom", () => {
            this.zoom.emit({
                transform: event.transform,
                visibleBounds: getVisibleArea(event.transform, this.el.nativeElement),
            })
        })

    private selection: Selection<Element, {}, null, undefined>

    constructor(private el: ElementRef) {}

    public ngOnInit(): void {
        this.selection = select(this.el.nativeElement).call(this.zoomBehaviour)
        this.zoomBehaviour.scaleTo(this.selection, this.theyMapZoom[0])
    }

    public ngOnChanges(): void {
        this.zoomBehaviour.scaleExtent(this.theyMapZoom)
    }
}
