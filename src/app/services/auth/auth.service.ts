import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin', roles: ['read', 'write', 'update', 'delete'] },
    { username: 'reader', password: 'reader', roles: ['read'] }
  ];

  private currentUser: any = null;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  getCurrentUsername(): string {
    return this.currentUser ? this.currentUser.username : '';
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  hasRole(role: string): boolean {
    return this.currentUser && this.currentUser.roles.includes(role);
  }
}