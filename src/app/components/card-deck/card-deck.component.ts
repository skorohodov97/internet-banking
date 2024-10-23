import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {Card } from 'src/app/technical/interface/card';
import { Account } from 'src/app/technical/interface/account';
import {CardDSService} from '../../technical/service/card-DS-service/card-ds.service';
import { AccountDSService } from 'src/app/technical/service/account-DS-service/account-ds.service';
@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  @Input() deckType: 'card' | 'account'  = 'card'; 
  cards: Card[] = [];
  accounts: Account[] = [];
  currency?: string;
  constructor(
    private router: Router,
    private cardDSService: CardDSService,
    private accountDSService: AccountDSService,
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

}
