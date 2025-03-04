import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/list']);
    } else {
      alert('Invalid credentials');
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
