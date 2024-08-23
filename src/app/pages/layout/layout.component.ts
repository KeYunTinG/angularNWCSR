import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, SideBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  isSidebarOpen = true;

  constructor() {}

  logoSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
