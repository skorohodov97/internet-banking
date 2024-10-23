import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() cardType: 'bank' | 'account' | 'example' = 'bank'; 
  @Input() number: string = '';
  @Input() month?: string; 
  @Input() year?: string; 
  @Input() accountName?: string; 
  @Input() balance?: number; 
  @Input() currency?: string = 'USD'; 
  @Input() imageSrc?: string = '/src/assets/mir.png'; 

}
