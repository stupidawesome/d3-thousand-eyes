import { Component } from "@angular/core"
import { Store } from "@ngrx/store"
import { AppState } from "@they/core/store"
import { Select } from "ngrx-actions"
import { Observable } from "rxjs/Observable"

@Component({
    selector: "they-home",
    template: `
        <h1>Home Page</h1>
        <p>Hello</p>
        <p>Ready: {{ ready$ | async }}</p>
    `,
    styles: [`
        :host {
            color: red;
        }
    `],
})
export class HomeComponent {
    @Select("feature.ready")
    public ready$: Observable<boolean>

    constructor(private store: Store<AppState>) {}
}
