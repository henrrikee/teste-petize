import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule, routes } from "./home.module.routing";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import { PerfilRoutingModule } from "../../perfil/shared/perfil.module.routing";
import { PagesModule } from "../../pages.module";
import { PagesRoutingModule } from "../../pages.module.routing";

@NgModule({
    declarations: [
    ],

    exports: [
    ],

    imports: [
        HomeRoutingModule,
        PerfilRoutingModule,
        CommonModule,
        InputTextModule,
        FormsModule,
        ButtonModule,

    ],
    providers: [

    ],

})
export class HomeModule { }