import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode: boolean = false;
  constructor() {
    this.darkMode = document.body.classList.contains('dark');
  }
  isDarkMode(): boolean {
    return this.darkMode;
  }
  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
}
