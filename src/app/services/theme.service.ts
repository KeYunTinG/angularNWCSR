import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode: boolean = false;
  constructor() {
    // 從 localStorage 讀取主題狀態
    const savedState = localStorage.getItem('DarkMode');
    if (savedState !== null) {
      this.darkMode = JSON.parse(savedState);
    } else {
      // 如果 localStorage 中沒有記錄，使用當前頁面的狀態
      this.darkMode = document.body.classList.contains('dark');
    }
    // 根據讀取到的狀態應用主題
    this.applyTheme(this.darkMode);
  }
  isDarkMode(): boolean {
    return this.darkMode;
  }
  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme(this.darkMode);

    // 將主題狀態保存到 localStorage
    localStorage.setItem('DarkMode', JSON.stringify(this.darkMode));
  }
  private applyTheme(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
