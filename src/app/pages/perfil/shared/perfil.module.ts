import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PerfilRoutingModule, routes } from "./perfil.module.routing";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import { HomeRoutingModule } from "../../home/shared/home.module.routing";
import {AvatarModule} from 'primeng/avatar';
import {CardModule} from 'primeng/card';

@NgModule({
    declarations: [
    ],

    exports: [
    ],

    imports: [
        CardModule,
        AvatarModule,
        RouterModule.forChild(routes),
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
export class PerfilModule { }