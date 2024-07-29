import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
       // canActivate: [RedirectByMaintenanceGuard, RedirectByNoAuthenticationGuard],//
      },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
       // canActivate: [RedirectByMaintenanceGuard, RedirectByNoAuthenticationGuard],//
      },
    {
        path: 'panel',
        loadChildren: () => import('./panel/panel.module').then((m) => m.PanelModule),
       // canActivate: [RedirectByMaintenanceGuard, RedirectByNoAuthenticationGuard],//
      },
];
