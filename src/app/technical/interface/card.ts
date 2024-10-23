import {Account} from './account';
import {Client} from './client';
import {Product} from './product';
export interface Card {
    id: number;
    account: Account;
    client: Client;
    cardProgram: string;
    product: Product;
    number: string;
    month: string;
    year: string;
    pinRequired: boolean;
    state: ['Created', 'Active', 'Locked', 'Expired', 'Blocked'];
  }
  
  
  