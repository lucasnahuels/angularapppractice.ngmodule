import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      const cloned = req.clone({
        // If I set this header, the weather api will return a 401 
        // setHeaders: {
        //   Authorization: `Bearer fake-jwt-token`
        // }
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}