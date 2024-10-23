import { NgModule } from '@angular/core';
import { TypeCardPageComponent } from './type-card-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '',
    component: TypeCardPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCardPageRoutingModule { }