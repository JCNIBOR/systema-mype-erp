import { Component } from '@angular/core';

import { CommonModule }
from '@angular/common';

import { RouterOutlet }
from '@angular/router';

import { NavbarComponent }
from '../navbar/navbar';

import { SidebarComponent }
from '../sidebar/sidebar';

@Component({
  selector: 'app-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent
  ],

  templateUrl: './dashboard.html',

  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  sidebarCollapsed = false;

  toggleSidebar(): void {

    this.sidebarCollapsed =
      !this.sidebarCollapsed;
  }

}