import { Component } from "@angular/core"

@Component({
    selector: "app-root",
    template: `
        <router-outlet></router-outlet>
    `,
    styles: [`
        :host {
            font-family: system, sans-serif;
        }
    `],
})
export class AppComponent {
    public title: string = "app"
}
