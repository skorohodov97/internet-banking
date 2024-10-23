import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SendDataOperationService} from '../../technical/service/senddataoperation/send-data-operation.service';
import {SendConfirmService} from '../../technical/service/send-confirm/send-confirm.service';
@Component({
  selector: 'app-type-card-page',
  templateUrl: './type-card-page.component.html',
  styleUrls: ['./type-card-page.component.scss']
})
export class TypeCardPageComponent   {


  constructor(
    private sendDataOperationService: SendDataOperationService, 
    private router: Router,
    private sendConfirmService: SendConfirmService) { }

  sendData() {
      this.sendDataOperationService
        .sendDataOperation('МИР', 'Кредитная карта')
        .subscribe({
          next: (responce) => {
            this.confirm();
          },
          error: (err) => {
            console.log(err);
          },
        });
  

  }
  confirm() {
    this.sendConfirmService.sendConfirm().subscribe({
      next: (responce) => {
        localStorage.removeItem('requestId');
        this.router.navigate(['/main']);
        console.log('err');  

      },
});
  }
} 
