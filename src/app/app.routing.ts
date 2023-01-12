import { Routes } from '@angular/router';
import { HomeComponent } from './pages/teste/home.component';


export const AppRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./pages/teste/shared/home.module').then(x => x.HomeModule), 
      }
    ]
  }
]