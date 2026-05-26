import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  @Input() collapsed = false;

  @Output() toggleSidebar =
    new EventEmitter<void>();

  userName = 'Alexander Pierce';

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  logout(): void {
    console.log('logout');
  }

  toggleFullscreen(): void {

  if (!document.fullscreenElement) {

    document.documentElement.requestFullscreen();

  } else {

    document.exitFullscreen();

  }

 }
}