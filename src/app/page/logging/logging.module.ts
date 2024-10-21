import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggingComponent } from './logging.component';
import { LoggingRoutingModule } from './logging-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
      LoggingComponent,
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      LoggingRoutingModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule
    ],
    exports: [LoggingComponent]
})
export class LoggingModule {}

