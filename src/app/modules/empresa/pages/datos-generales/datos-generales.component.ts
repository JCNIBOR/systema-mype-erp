import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule }
from '@angular/common';

import { EmpresaService }
from '../../services/empresa.service';

@Component({
  selector: 'app-datos-generales',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './datos-generales.component.html',

  styleUrl:
    './datos-generales.component.css'
})
export class DatosGeneralesComponent {

  empresaForm: FormGroup;

  logoPreview:
    string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private empresaService: EmpresaService
  ) {

    this.empresaForm =
      this.fb.group({

        razonSocial: [
          '',
          Validators.required
        ],

        nombreComercial: [
          '',
          Validators.required
        ],

        ruc: [
          '',
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11)
          ]
        ],

        direccion: [
          '',
          Validators.required
        ],

        telefono: [''],

        email: [
          '',
          Validators.email
        ],

        logo: [null]

      });
  }

  /* =========================
     LOGO
  ========================= */

  onLogoSelected(
    event: any
  ): void {

    const file =
      event.target.files[0];

    if (file) {

      this.empresaForm.patchValue({
        logo: file
      });

      const reader = new FileReader();

      reader.onload = () => {

        this.logoPreview =
          reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  /* =========================
     GUARDAR
  ========================= */

  guardar(): void {

    if (this.empresaForm.invalid) {

      this.empresaForm.markAllAsTouched();

      return;
    }

    this.empresaService.guardarEmpresa(
      this.empresaForm.value
    );

    alert(
      'Datos registrados correctamente'
    );
  }

}