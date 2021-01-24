import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./components/config/config.module').then(m => m.ConfigModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./components/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full'
  },
];