import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((module) => module.UserModule),
  },
  {
    path: 'driver',
    loadChildren: () =>
      import('./driver/driver.module').then((module) => module.DriverModule),
  },
  {
    path: 'medic',
    loadChildren: () =>
      import('./medic/medic.module').then((module) => module.MedicModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((module) => module.HistoryModule),
  },
];
