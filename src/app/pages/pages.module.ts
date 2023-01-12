import { NgModule } from "@angular/core";
import { HomeModule } from "./home/shared/home.module";
import { PerfilModule } from "./perfil/shared/perfil.module";

@NgModule({
    declarations: [],
    imports: [
        HomeModule,
        PerfilModule
    ],
    providers: [

    ],
})
export class PagesModule { }
