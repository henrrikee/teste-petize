import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerfilComponent } from "../../perfil/perfil.component";
import { HomeComponent } from "../home.component";

export const routes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'perfil',  component: PerfilComponent }]
    

    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    export class HomeRoutingModule { }