import { Routes } from '@angular/router';

import { LoginComponent }
from './layout/login/login';

import { DashboardComponent }
from './layout/dashboard/dashboard';

export const routes: Routes = [

  /* LOGIN */
  {
    path: 'login',
    component: LoginComponent
  },

  /* DASHBOARD */
  {
    path: '',

    component: DashboardComponent,

    children: [

      {
        path: 'dashboard',

        loadChildren: () =>
          import('./modules/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES)
      },

      {
        path: 'empresa',

        loadChildren: () =>
          import('./modules/empresa/empresa.routes')
            .then(m => m.EMPRESA_ROUTES)
      }

    ]
  },

  /* DEFAULT */
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];