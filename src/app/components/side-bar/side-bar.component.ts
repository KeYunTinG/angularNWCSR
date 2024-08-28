import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  isDropdownOpen = false;
  @Input() isSidebarOpen: boolean = false;
  menuItems = [
    {
      label: '員工資料',
      children: [
        { label: '員工資料設定', href: '/default' },
        { label: '員工資料異動', href: '#' },
        { label: '部門代號設定', href: '#' },
        { label: '匯費級距表', href: '#' },
        { label: '分攤比率修改', href: '#' },
        { label: '分攤比率增減', href: '#' },
        { label: '會計科目設定', href: '#' },
        { label: '廠商資料設定', href: '/supplier' },
        { label: '廠商資料異動', href: '#' },
        { label: '解款行庫設定', href: '#' },
        { label: '狀態碼維護', href: '#' },
        { label: '憑證類別設定', href: '#' },
      ],
    },
  ];
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
}
