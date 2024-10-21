import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { RegisterFormComponent } from './register-form.component';
import {RegisterFormComponentModule} from "./register-routing.module";
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [RegisterFormComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        RegisterFormComponentModule,
        NgxMaskModule.forRoot()

    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }
    ],
    exports: [RegisterFormComponent]
})
export class RegisterModule { }