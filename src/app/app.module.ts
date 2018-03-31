import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "@they/app-routing.module"
import { AppComponent } from "@they/app.component"
import { CoreModule } from "@they/core/core.module"
import { StoreModule } from "@they/core/store/store.module"

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        StoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
