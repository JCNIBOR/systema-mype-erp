import { Injectable } from '@angular/core';

import { Empresa }
from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private empresa: Empresa | null = null;

  guardarEmpresa(
    data: Empresa
  ): void {

    this.empresa = data;

    console.log(
      'Empresa guardada:',
      data
    );
  }

  obtenerEmpresa():
    Empresa | null {

    return this.empresa;
  }

}