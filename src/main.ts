import { enableProdMode } from "@angular/core"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "@they/app.module"
import { environment } from "@they/environment"

if (environment.production) {
    enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => {
        // tslint:disable-next-line no-console
        console.log(err)
    })
