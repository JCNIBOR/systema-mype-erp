import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { RouterModule }
from '@angular/router';

import { AuthService }
from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './navbar.html',

  styleUrl: './navbar.css'
})
export class NavbarComponent
implements OnInit {

  @Input()
  collapsed = false;

  @Output()
  toggleSidebar =
    new EventEmitter<void>();

  username = '';

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    this.username =
      this.authService.getUsername();
  }

  logout(): void {

    this.authService.logout();

    location.href = '/login';
  }

}