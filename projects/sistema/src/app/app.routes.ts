import { Routes } from '@angular/router';
import { PageLoginComponent } from './core/views/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((module) => module.UserModule),
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'driver',
    loadChildren: () =>
      import('./driver/driver.module').then((module) => module.DriverModule),
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'medic',
    loadChildren: () =>
      import('./medic/medic.module').then((module) => module.MedicModule),
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((module) => module.HistoryModule),
    canLoad: [AuthenticationGuard],
  },
];
