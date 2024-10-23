import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {Card } from 'src/app/technical/interface/card';
import { OperationData} from 'src/app/technical/interface/оperationdata';
import { Account } from 'src/app/technical/interface/account';
import {CardDSService} from '../../technical/service/card-DS-service/card-ds.service';
import { AccountDSService } from 'src/app/technical/service/account-DS-service/account-ds.service';
import {CardOrderService} from '../../technical/service/card-order-service/card-order.service';
import { AccountOpenService } from '../../technical/service/account-open-service/account-open.service';
@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  @Input() deckType: 'card' | 'account'  = 'card'; 
  operationData!: OperationData;
  requestId!: number;
  cards: Card[] = [];
  accounts: Account[] = [];
  currency?: string;
  constructor(
    private router: Router,
    private cardDSService: CardDSService,
    private accountDSService: AccountDSService,
    private cardOrderService: CardOrderService,
    private accountOpenService: AccountOpenService
  ) { }

  ngOnInit(): void {
    if (this.deckType === 'card') {
      this.loadingСardDeck();
    } else if (this.deckType === 'account') {
      this.loadingAccountDeck();
    }
  }
  loadingСardDeck(): void {
    this.cardDSService.getCards().subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  loadingAccountDeck(): void {
    this.accountDSService.getAccounts().subscribe({
      next: (data) => {
        this.accounts = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  cardOrder(): void {
    this.cardOrderService.beginCardOrder().subscribe({
      next: (data) => {
        this.requestId = data.requestId;
        localStorage.setItem('requestId', this.requestId.toString());
        this.router.navigate(['/card-order']);

      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  accountOpen(): void {
    this.accountOpenService.beginAccountOpen().subscribe({
      next: (data) => {
        this.requestId = data.requestId;
        localStorage.setItem('requestId', this.requestId.toString());
        this.router.navigate(['account-open/select-type']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
