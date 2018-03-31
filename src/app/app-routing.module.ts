import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "@they/core/home/home.component"

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "sf-muni-map",
        loadChildren: "app/sf-muni-map/sf-muni-map.module#SfMuniMapModule",
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
