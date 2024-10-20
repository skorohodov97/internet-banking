import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './page/main-page/main-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './ingecter/auth.interceptor';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './page/register-form/register-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {LoggingComponent} from "./page/logging/logging.component";
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    RegisterFormComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true 
    },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
