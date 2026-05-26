import { Component } from '@angular/core';

import { FormsModule }
from '@angular/forms';

import { Router }
from '@angular/router';

import { AuthService }
from '../../core/services/auth.service';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    FormsModule
  ],

  templateUrl: './login.html',

  styleUrl: './login.css'
})
export class LoginComponent {

  username = '';

  password = '';

  selectedRole = 'superadmin';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  login(): void {

    this.authService.login(
      this.username,
      this.selectedRole
    );

    this.router.navigate([
      '/dashboard'
    ]).then(() => {

      window.location.reload();

    });
  }

}