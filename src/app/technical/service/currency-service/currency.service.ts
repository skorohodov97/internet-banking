import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  getCurrency(currencyCode: number): string {
    switch (currencyCode) {
      case 643:
        return 'RUB';
      
      case 978:
        return 'EUR';
      
      case 156:
        return 'CNY'
      
      default:
        return 'RUB';
    }
  }
}
