import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OperationData} from '../../interface/оperationdata';
@Injectable({
  providedIn: 'root'
})
export class CardOrderService {

  constructor(private http: HttpClient,) { }
  beginCardOrder() {
    return this.http.put<OperationData>(`api/operations`, {operationCode: 'CardOrder',});
  }

}
