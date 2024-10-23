import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SendConfirmService {
  requestId = localStorage.getItem('requestId');
  constructor(private http: HttpClient) { }
  sendConfirm() {
    return this.http.post(`api/operations?requestId=${this.requestId}`, {});
  }

}
