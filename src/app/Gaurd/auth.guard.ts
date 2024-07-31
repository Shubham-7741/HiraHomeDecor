import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authservice.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['adminLogin']);
      return false;
    }
  }
}
