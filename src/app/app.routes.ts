import { Routes } from '@angular/router';

import { LoginComponent }
from './layout/login/login';

import { DashboardComponent }
from './layout/dashboard/dashboard';

export const routes: Routes = [

  /* =====================================
     DEFAULT
  ===================================== */

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  /* =====================================
     LOGIN
  ===================================== */

  {
    path: 'login',
    component: LoginComponent
  },

  /* =====================================
     DASHBOARD LAYOUT
  ===================================== */

  {
    path: '',

    component: DashboardComponent,

    children: [

      /* HOME */
      {
        path: 'dashboard',

        loadChildren: () =>
          import('./modules/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES)
      },

      /* EMPRESA */
      {
        path: 'empresa',

        loadChildren: () =>
          import('./modules/empresa/empresa.routes')
            .then(m => m.EMPRESA_ROUTES)
      }

    ]
  },

  /* =====================================
     NOT FOUND
  ===================================== */

  {
    path: '**',
    redirectTo: 'login'
  }

];