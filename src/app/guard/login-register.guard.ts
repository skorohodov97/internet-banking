import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginRegisterGuard implements CanActivate {

  constructor( private router: Router) {}

  canActivate(): boolean {
    const tokens = localStorage.getItem('tokens');
    if (tokens) {
      this.router.navigate(['/main']); 
      return false;
    } else {
      return true; 
    }
  }
}