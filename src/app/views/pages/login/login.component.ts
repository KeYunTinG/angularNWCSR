import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isPasswordVisible: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    localStorage.setItem('dropdownState', JSON.stringify(false));
  }
  //密碼隱藏/顯示
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  //登入邏輯
  signin(): void {
    console.log('username:', this.username);
    console.log('password:', this.password);

    if (this.username.length === 0 || this.password.length === 0) {
      alert('員工編號密碼不得為空');
      return;
    }
    if (this.username !== 'uitc' || this.password !== 'uitc') {
      alert('員工編號密碼有誤');
    } else if (this.username === 'uitc' && this.password === 'uitc') {
      this.router.navigate(['/default']);
    }
  }
}
