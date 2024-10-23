import { Component,Input } from '@angular/core';
import { CurrencyService } from 'src/app/technical/service/currency-service/currency.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  constructor(private currencyService: CurrencyService) { }
  @Input() cardType: 'bank' | 'account' | 'example' = 'bank'; 
  @Input() number: string = '';
  @Input() month?: string; 
  @Input() year?: string; 
  @Input() accountName?: string; 
  @Input() balance?: number; 
  @Input() currency?: number; 
  @Input() imageSrc?: string = '/assets/mir.png'; 
  getCurrency() {
    return this.currencyService.getCurrency( this.currency ?? 0);
  }

}
