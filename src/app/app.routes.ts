import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/my-info',
    pathMatch: 'full',
  },
  {
    path: 'my-info',
    loadComponent: () => import('./pages/my-info/my-info.page').then( m => m.MyInfoPage)
  },
  {
    path: 'table-mult',
    loadComponent: () => import('./pages/table-mult/table-mult.page').then( m => m.TableMultPage)
  },
  {
    path: 'comparer-avg',
    loadComponent: () => import('./pages/comparer-avg/comparer-avg.page').then( m => m.ComparerAvgPage)
  },
];
