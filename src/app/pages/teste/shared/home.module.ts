import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeRoutingModule, routes } from "./home.module.routing";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from "@angular/forms";
import {ButtonModule} from 'primeng/button';

@NgModule({
    declarations: [
    ],

    exports: [
    ],

    imports: [
        RouterModule.forChild(routes),
        HomeRoutingModule,
        CommonModule,
        InputTextModule,
        FormsModule,
        ButtonModule,

    ],
    providers: [],

})
export class HomeModule { }