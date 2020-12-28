import { Component, OnInit } from '@angular/core';
import { CsTransaction } from '../common/interface/cs-transaction.interface';
import { SharedDataService } from '../common/shared-data/shared-data.service';
import { TransactionsService } from '../services/transactions.service';
import * as moment from 'moment';

@Component({
  selector: 'cs-transactions',
  templateUrl: './cs-transactions.component.html',
  styleUrls: ['./cs-transactions.component.scss']
})
export class CsTransactionsComponent implements OnInit {

  transactions: CsTransaction[];
  searchText = '';
  sortOrder = 'asc';
  sortBy = '';
  toggleSort = {
    date: false,
    merchant: false,
    amount: false
  }

  constructor(
    private transactionsService: TransactionsService,
    private dataService: SharedDataService
  ) { }

  ngOnInit() {
    // Get recent transactions
    this.transactionsService.getTransactions()
      .subscribe(response => {
        this.transactions = response.data;
        this.transactions = this.transactions.map(item => {
          item.dates.valueDate = moment(item.dates.valueDate).valueOf();
          item.transaction.amountCurrency.amount = Number(item.transaction.amountCurrency.amount);
          return item;
        })
        this.dataService.updateTransaction(this.transactions);
      });

    // Subscription for data changed in Transactions
    this.dataService.transaction.subscribe(response => {
      this.transactions = response;
    });
  }

  /**
   * Tracks by trans date
   * @param index
   * @param transaction
   * @returns
   */
  trackByTransDate(index: number, transaction: CsTransaction) {
    return moment(transaction.dates.valueDate).valueOf();
  }


  /**
   * Get url of cs transactions component
   * @description Blank spaces from the string will be converted into '-' to get image url
   * @param name of Beneficiary
   * @returns string
   */
  getUrl = (name: string) => {
    if (!name) { name = '' };
    return name.replace(/ /gi, '-');
  }

  /**
   * Set image src empty if image not found
   */
  onImgError = (event: HTMLInputElement) => event.src = '';

  keyName = '';

  /**
   * Set sortkey of cs transactions component
   */
  setSortkey = (sortKey: string) => {
    switch (sortKey) {
      case 'dates.valueDate':
        this.keyName = 'date';
        break;
      case 'merchant.name':
        this.keyName = 'merchant';
        break;
      case 'transaction.amountCurrency.amount':
        this.keyName = 'amount';
        break;
    }

    if(this.toggleSort[this.keyName]) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    }

    Object.keys(this.toggleSort).map(key => this.toggleSort[key] = false);

    this.toggleSort[this.keyName] = true;
    this.sortBy = sortKey;
  }

}
