import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  isDropdownOpen = false;
  isSidebarOpen = true;

  constructor() {}

  // 監聽窗口尺寸變化
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }
  // 檢查螢幕尺寸是否為中等及以上,超過768px展開,小於則收起
  private checkScreenSize() {
    if (window.innerWidth >= 768) this.isSidebarOpen = true;
    else this.isSidebarOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logoSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
