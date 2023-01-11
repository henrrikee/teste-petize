import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const AppRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule), 
      }
    ]
  }
]