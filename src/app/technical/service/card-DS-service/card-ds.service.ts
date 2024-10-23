import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../../interface/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDSService {

  constructor( private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`api/cards`);
  }


}
