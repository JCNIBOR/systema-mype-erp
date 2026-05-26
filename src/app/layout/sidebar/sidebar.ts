import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { RouterModule }
from '@angular/router';

import { MenuService }
from '../../core/services/menu.service';

import { AuthService }
from '../../core/services/auth.service';

import { MenuItem }
from '../../core/models/menu-item.model';

@Component({
  selector: 'app-sidebar',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './sidebar.html',

  styleUrl: './sidebar.css'
})
export class SidebarComponent
implements OnInit {

  @Input()
  collapsed = false;

  menuItems: MenuItem[] = [];

  currentRole = '';

  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    this.currentRole =
      this.authService.getRole();

    this.menuItems =
      this.menuService.getMenuByRole(
        this.currentRole
      );
  }

  toggle(item: MenuItem): void {

    item.open = !item.open;
  }

}