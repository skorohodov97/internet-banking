import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginRegisterGuard} from './technical/guard/login-register.guard';
import {AuthGuard} from './technical/guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'home', loadChildren: () => import('./page/home-page/home.module').then(m => m.HomePageModule), canActivate: [LoginRegisterGuard] },
  { path: 'login', loadChildren: () => import('./page/logging/logging.module').then(m => m.LoggingModule), canActivate: [LoginRegisterGuard] },
  { path: 'register', loadChildren: () => import('./page/register-form/register.module').then(m => m.RegisterModule), canActivate: [LoginRegisterGuard] },
  { path: 'main', loadChildren: () => import('./page/main-page/main.module').then(m => m.MainPageModule), canActivate: [AuthGuard] },
  { path: 'card-order', loadChildren: () => import('./page/type-card-page/type-card.module').then(m => m.TypeCardPageModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
