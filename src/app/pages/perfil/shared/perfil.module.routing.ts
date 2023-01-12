import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerfilComponent } from "../perfil.component";

export const routes: Routes = [
    { path: 'perfil',  component: PerfilComponent },
    { path: 'perfil/:login',  component: PerfilComponent }]

    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    export class PerfilRoutingModule { }