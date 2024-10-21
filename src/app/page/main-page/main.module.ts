import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageRoutingModule} from './main-routing.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
    declarations: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        MainPageRoutingModule
    ],
    exports: [MainPageComponent]
})
export class MainPageModule { }