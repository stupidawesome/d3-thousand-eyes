import { Injectable } from "@angular/core"
import { select, Selection } from "d3-selection"

@Injectable()
export class MapService {
    private selection: Selection<HTMLElement, {}, null, undefined>

    public create(nativeElement: HTMLElement): void {
        this.selection = select(nativeElement)
    }

    public update(): void {

    }

    public destroy(): void {

    }
}
