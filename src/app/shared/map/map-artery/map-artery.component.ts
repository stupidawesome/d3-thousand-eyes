import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core"
import { filterVisibleCollection, simplifyTopology } from "@they/shared/map/map-utils"
import { MapZoom } from "@they/shared/map/map-zoom/map-zoom.directive"
import { isNullOrUndefined } from "@they/util/util"
import { GeoPath } from "d3-geo"
import { FeatureCollection, GeometryObject } from "geojson"
import { feature, GeometryCollection, planarTriangleArea, Topology } from "topojson"

@Component({
    // tslint:disable-next-line disable component-selector
    selector: "g[theyMapArtery]",
    template: `
        <svg:path class="path" [attr.d]="visibleCollection | geoPath: path"></svg:path>
    `,
    styles: [`
        path {
            fill: none;
            stroke: mediumvioletred;
            stroke-linejoin: round;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapArteryComponent implements OnChanges {
    @Input()
    public theyMapArtery: Topology<{ arteries: GeometryCollection }>

    @Input()
    public mapZoom: MapZoom

    @Input()
    public path: GeoPath<void, GeometryObject>

    protected sourceCollection: FeatureCollection<GeometryObject>

    protected visibleCollection: FeatureCollection<GeometryObject>

    public ngOnChanges(changes: SimpleChanges): void {
        if (!isNullOrUndefined(changes.theyMapArtery)) {
            this.processTopology()
        }
        this.filterFeatures()
    }

    private processTopology(): void {
        if (!isNullOrUndefined(this.theyMapArtery)) {
            const simplified = simplifyTopology<{ arteries: GeometryCollection }>(this.theyMapArtery, planarTriangleArea, 1e-9)
            this.sourceCollection = feature(simplified, simplified.objects.arteries)
        }
    }

    private filterFeatures(): void {
        if (!isNullOrUndefined(this.sourceCollection)) {
            this.visibleCollection = filterVisibleCollection(this.sourceCollection, this.path, this.mapZoom.visibleBounds)
        }
    }
}
