import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/shared/home.module')
            .then(module => module.HomeModule),
    },
    {
        path: 'perfil',
        loadChildren: () => import('./perfil/shared/perfil.module')
            .then(module => module.PerfilModule),
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }