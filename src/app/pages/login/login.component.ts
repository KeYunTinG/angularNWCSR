import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isPasswordVisible: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  signin(): void {
    console.log("username:",this.username);
    console.log("password:",this.password);

    if(this.username.length === 0 || this.password.length === 0)
      return;
    if (this.username !== 'mygo' || this.password !== 'mygo') {
      alert('帳號密碼有誤')
    }
    else if (this.username === 'mygo' && this.password === 'mygo') {
      this.router.navigate(['/default']);
    }
  }
}
