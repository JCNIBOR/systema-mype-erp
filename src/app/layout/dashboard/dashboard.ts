import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  // Estado del sidebar
  sidebarCollapsed = false;

  // Método para colapsar/expandir
  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}