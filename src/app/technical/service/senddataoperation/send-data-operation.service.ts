import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SendDataOperationService {
  requestId = localStorage.getItem('requestId');
  constructor(private http: HttpClient,) { }
  sendDataOperation(selectedPayment: string, cardType: string) {
    const stepParams = [
      {'identifier': 'Product', 'value': cardType},
      {'identifier': 'ProgramType', 'value': selectedPayment},
    ];
    return this.http.patch(`api/operations?requestId=${this.requestId}`, stepParams);
  }

}
