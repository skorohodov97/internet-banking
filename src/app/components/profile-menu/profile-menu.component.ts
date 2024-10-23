import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { AuthorizationService } from '../../technical/service/authorization-service/authorization.service';
@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  isAuthenticated = false;
  private subscription$: Subscription | null = null;
  constructor(private readonly authorizationService: AuthorizationService,private router: Router) {}

  ngOnInit() {
    this.authorizationService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  logout() {
    this.subscription$ = this.authorizationService.logout().subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err); 
      },
    })
    this.router.navigate(['/home']);
    this.isAuthenticated = false; 
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}