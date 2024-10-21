import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard {
    constructor(
      private router: Router,
    ) {}


    canActivate(): boolean {
        const tokens = localStorage.getItem('tokens');
        if (tokens) {
            return true;
          } else {
            this.router.navigate(['/home']);
            return false;
          }
      
    }
  }  