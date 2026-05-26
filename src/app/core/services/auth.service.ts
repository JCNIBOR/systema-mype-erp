import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  /* =========================
     LOGIN
  ========================= */

  login(
    username: string,
    role: string
  ): void {

    localStorage.setItem(
      'token',
      'fake-jwt-token'
    );

    localStorage.setItem(
      'username',
      username
    );

    localStorage.setItem(
      'role',
      role
    );
  }

  /* =========================
     LOGOUT
  ========================= */

  logout(): void {

    localStorage.removeItem('token');

    localStorage.removeItem('username');

    localStorage.removeItem('role');
  }

  /* =========================
     TOKEN
  ========================= */

  getToken(): string {

    return localStorage.getItem('token')
      || '';
  }

  /* =========================
     USERNAME
  ========================= */

  getUsername(): string {

    return localStorage.getItem('username')
      || 'Invitado';
  }

  /* =========================
     ROLE
  ========================= */

  getRole(): string {

    return localStorage.getItem('role')
      || 'usuario';
  }

  /* =========================
     AUTH STATUS
  ========================= */

  isAuthenticated(): boolean {

    return !!localStorage.getItem('token');
  }

}