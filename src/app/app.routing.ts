import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


export const AppRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/shared/home.module').then(x => x.HomeModule),
      }
    ],
  },
  {
    path: 'perfil', component: PerfilComponent,
    children: [
      {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/shared/perfil.module').then(x => x.PerfilModule),
      }
    ]
  },

]