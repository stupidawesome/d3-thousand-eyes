import { Component } from "@angular/core"
import { Store } from "@ngrx/store"
import { AppState } from "@they/core/store"
import { Select } from "ngrx-actions"
import { Observable } from "rxjs/Observable"

@Component({
    selector: "they-home",
    template: `
        <div>
            <h1>D3 Thousand Eyes</h1>
            <a href="sf-muni-map">-&gt; Load the Map &lt;-</a>
        </div>
    `,
    styles: [`
        :host {
            display: flex;
            height: 100%;
            color: black;
        }

        div {
            margin: auto;
            text-align: center;
        }

        a {
            display: inline-block;
            height: 4rem;
            font-size: 2rem;
            font-weight: 900;
            font-family: system, Verdana, sans-serif;
            color: white;
            background: dodgerblue;
            text-decoration: none;
            line-height: 4rem;
        }
    `],
})
export class HomeComponent {
    @Select("feature.ready")
    public ready$: Observable<boolean>

    constructor(private store: Store<AppState>) {}
}
