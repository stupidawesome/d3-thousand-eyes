import { NgModule } from "@angular/core"
import { EffectsModule } from "@ngrx/effects"
import { StoreModule as NgrxStore } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { APP_EFFECTS, APP_REDUCERS } from "@they/core/store/index"
import { NgrxActionsModule } from "ngrx-actions"

@NgModule({
    imports: [
        NgrxStore.forRoot(APP_REDUCERS),
        EffectsModule.forRoot(APP_EFFECTS),
        NgrxActionsModule,
        StoreDevtoolsModule.instrument({
            maxAge: 50,
        }),
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class StoreModule {}
