import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { SharedDataService } from '../common/shared-data/shared-data.service';
import { TransferService } from '../services/transfer.service';
import { CsTransaction } from '../common/interface/cs-transaction.interface';
import { CloneDeepFormatterPipe } from '../common/pipes/clone-deep-formatter.pipe';

@Component({
  selector: 'cs-transfer',
  templateUrl: './cs-transfer.component.html',
  styleUrls: ['./cs-transfer.component.scss'],
  providers: [CurrencyPipe, DecimalPipe, CloneDeepFormatterPipe]
})
export class CsTransferComponent implements OnInit {
  transferForm: FormGroup;
  submitted = false;

  transactions: CsTransaction[];

  transferFrom: CsTransaction = {
    "categoryCode": "#12a580",
    "dates": {
      "valueDate": Date.parse(Date())
    },
    "transaction": {
      "amountCurrency": {
        "amount": 5824.76,
        "currencyCode": "EUR"
      },
      "type": "Online Transfer",
      "creditDebitIndicator": "DBIT"
    },
    "merchant": {
      "name": "Free Checking",
      "accountNumber": "4692"
    }
  };
  transferTo: CsTransaction = {
    "categoryCode": "#c12020",
    "dates": {
      "valueDate": Date.parse(Date())
    },
    "transaction": {
      "amountCurrency": {
        "amount": 0,
        "currencyCode": "EUR"
      },
      "type": "Online Transfer",
      "creditDebitIndicator": "CRDT"
    },
    "merchant": {
      "name": "Georgia Power Electric Company",
      "accountNumber": ""
    }
  };

  accountBalance = this.transferFrom.transaction.amountCurrency.amount;
  fromAccount = `
    ${
      this.transferFrom.merchant.name
    }(${
      this.transferFrom.merchant.accountNumber
    }) - $ ${
      this.transferFrom.transaction.amountCurrency.amount
    }
  `.trim();
  toAccount = this.transferTo.merchant.name;
  amount = 0;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: SharedDataService,
    private transferServie: TransferService,
    private decimalPipe: DecimalPipe,
    private cloneDeep: CloneDeepFormatterPipe
  ) { }

  ngOnInit() {
    this.transferForm = this.formBuilder.group({
      fromAccount: [this.fromAccount, [Validators.required]],
      toAccount: [this.toAccount, [Validators.required]],
      amount: [this.amount, [Validators.required]]
    });

    // Subscription for data changed in Transactions
    this.dataService.transaction.subscribe(response => {
      this.transactions = response;
    });

    this.transferForm.valueChanges.subscribe(change => {
      this.amount = this.transferForm.controls['amount'].value;
      this.toAccount = this.transferForm.controls['toAccount'].value;

      this.validateAmount();
    })
  }

  /**
   * Validate amount of cs transfer component
   */
  validateAmount = () => {
    const amount = this.amount || 0;
    const maxLimit = this.accountBalance + 500;
    return amount > maxLimit || amount == 0 ? true : false;
  }

  /**
   * Gets field name
   */
  get fieldName() { return this.transferForm.controls; }

  /**
   * Determines whether submit on
   * @returns
   */
  onSubmit = () => {
    this.submitted = true;
    if (this.transferForm.invalid || this.validateAmount()) { return }

    this.transferTo.transaction.amountCurrency.amount = this.amount;
    this.transferTo.merchant.name = this.toAccount;
  }

  /**
   * Initiate transfer of cs transfer component
   */
  initiateTransfer = () => {
    let transferPayload: CsTransaction[];
    const transferTo = this.cloneDeep.transform(this.transferTo);

    this.transferServie.postTransaction( [transferTo] )
    .subscribe(response => {
      transferPayload = response.data;
      // update amount
      this.transferFrom.transaction.amountCurrency.amount = this.transferFrom.transaction.amountCurrency.amount - this.amount;
      this.accountBalance = this.transferFrom.transaction.amountCurrency.amount;
      this.transferTo.transaction.amountCurrency.amount = this.amount;
      // Add new transfer record
      transferPayload = transferPayload.concat(this.transactions);
      // update transactions
      this.dataService.updateTransaction(transferPayload);

      // Reset form
      this.submitted = false;
      this.transferForm.controls['fromAccount'].patchValue(
        `${
          this.transferFrom.merchant.name
        }(${
          this.transferFrom.merchant.accountNumber
        }) - $ ${
          this.decimalPipe.transform(this.transferFrom.transaction.amountCurrency.amount, '1.2-2')
        }`
      .trim());

      this.fromAccount = `
        ${
          this.transferFrom.merchant.name
        }(${
          this.transferFrom.merchant.accountNumber
        }) - $ ${
          this.decimalPipe.transform(this.transferFrom.transaction.amountCurrency.amount, '1.2-2')
        }
      `.trim();
      this.transferForm.controls['amount'].reset();
    });
  }

}
