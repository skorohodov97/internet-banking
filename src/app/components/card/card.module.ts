import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';  
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {LastSimvolPipe} from '../../technical/pipes/last-simvol.pipe';
@NgModule({
  declarations: [
    CardComponent 
  ],
  imports: [
    CommonModule
    ,MatCardModule
    ,MatButtonModule,
    LastSimvolPipe

  ],
  exports: [
    CardComponent 

  ]
})
export class CardModule { }