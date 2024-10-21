import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './ingecter/auth.interceptor';
import {HomePageModule} from './page/home-page/home.module';
import {MainPageModule} from './page/main-page/main.module';
import {RegisterModule} from './page/register-form/register.module';
import {LoggingModule} from './page/logging/logging.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
   

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
    RouterModule
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
