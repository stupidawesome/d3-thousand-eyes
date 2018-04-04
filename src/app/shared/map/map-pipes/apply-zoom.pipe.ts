import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: "applyZoom",
    pure: true,
})
export class ApplyZoomPipe implements PipeTransform {
    public transform(value: number, zoom: number = 1): number {
        return value / zoom
    }
}
