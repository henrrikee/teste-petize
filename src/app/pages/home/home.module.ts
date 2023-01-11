import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeRoutingModule, routes } from "./home.module.routing";
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TreeSelectModule} from 'primeng/treeselect';
import {ToggleButtonModule} from 'primeng/togglebutton';

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
    ],
    providers: [],

})
export class HomeModule { }