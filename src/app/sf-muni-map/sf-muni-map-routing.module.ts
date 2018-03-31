import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { SfMuniMapComponent } from "@they/sf-muni-map/sf-muni-map.component"

const routes: Routes = [
    {
        path: "",
        component: SfMuniMapComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SfMuniMapRoutingModule {}
