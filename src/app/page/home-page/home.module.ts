import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './home-page.component';
import { HomePageComponentModule } from './home-routing.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        HomePageComponentModule
    ],
    exports: [HomePageComponent]
})
export class HomePageModule {}
