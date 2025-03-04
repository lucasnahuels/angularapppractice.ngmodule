import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const requiredRole = next.data['role'];
    if (this.authService.isAuthenticated() && this.authService.hasRole(requiredRole)) {
      return true;
    } else {
      alert('User not authorized');
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}