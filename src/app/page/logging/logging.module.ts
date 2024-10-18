import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggingRoutingModule } from './logging-routing.module';
import { LoggingComponent } from './logging.component';

@NgModule({
    declarations: [LoggingComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoggingRoutingModule

    ],
 

})
export class LoggingModule {}

