import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeCardPageRoutingModule } from './type-card-routing.module';
import { TypeCardPageComponent } from './type-card-page.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        TypeCardPageComponent,
      
    ],
    imports: [
        CommonModule,
        TypeCardPageRoutingModule,
        MatCardModule,

    ],
    exports: [TypeCardPageComponent]
})
export class TypeCardPageModule { }