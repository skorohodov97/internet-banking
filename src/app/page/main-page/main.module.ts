import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageRoutingModule} from './main-routing.module';
import { MainPageComponent } from './main-page.component';
import { CardDeckComponent } from '../../components/card-deck/card-deck.component';
import { MatCardModule } from '@angular/material/card';
import {LastSimvolPipe} from '../../technical/pipes/last-simvol.pipe';
import {CardComponent} from '../../components/card/card.component';
@NgModule({
    declarations: [
        MainPageComponent,
        CardDeckComponent,
        LastSimvolPipe,
        CardComponent
    ],
    imports: [
        CommonModule,
        MainPageRoutingModule,
        MatCardModule,
    ],
    exports: [MainPageComponent]
})
export class MainPageModule { }