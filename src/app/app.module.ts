import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './technical/ingecter/auth.interceptor';
import {HomePageModule} from './page/home-page/home.module';
import {MainPageModule} from './page/main-page/main.module';
import {RegisterModule} from './page/register-form/register.module';
import {LoggingModule} from './page/logging/logging.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { TypeCardPageModule } from './page/type-card-page/type-card.module';





@NgModule({
  declarations: [
    AppComponent,
    ProfileMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    HomePageModule,
    MainPageModule,
    RegisterModule,
    LoggingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    TypeCardPageModule,
    


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true 
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
