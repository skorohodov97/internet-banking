export interface Account {
    id: number;
    createdDate: Date;
    currency: number;
    number: string;
    name: string;
    balance: number;
    state: ['Created', 'Blocked', 'Active'];
  }
  