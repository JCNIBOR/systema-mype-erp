import { Routes }
from '@angular/router';

import { DatosGeneralesComponent }
from './pages/datos-generales/datos-generales.component';

export const EMPRESA_ROUTES: Routes = [

  {
    path: 'datos',
    component: DatosGeneralesComponent
  }

];