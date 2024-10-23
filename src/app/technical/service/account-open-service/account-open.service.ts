import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OperationData} from '../../interface/оperationdata';
@Injectable({
  providedIn: 'root'
})
export class AccountOpenService {

  constructor( private http: HttpClient) { }
  beginAccountOpen() {
    return this.http.put<OperationData>(`api/operations`, {operationCode: 'AccountOpen'});
  }

}
