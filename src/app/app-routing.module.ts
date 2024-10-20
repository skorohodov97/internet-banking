import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { RegisterFormComponent } from './page/register-form/register-form.component';
import {LoggingComponent} from "./page/logging/logging.component";
const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login',
    component: LoggingComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent, 
  },

  { path: 'main-page', component: MainPageComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
