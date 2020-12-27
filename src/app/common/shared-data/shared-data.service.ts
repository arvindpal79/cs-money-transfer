import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CsTransaction } from '../interface/cs-transaction.interface';
import { LoaderService } from '../service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private loaderService: LoaderService) {}

  private messageSource = new Subject<any>();

  transaction = this.messageSource.asObservable();

  updateTransaction = (transactions: CsTransaction[]) => {
    this.messageSource.next(transactions);

    // Adding delay to show loading spinner
    setTimeout(()=>{
      this.loaderService.isLoading.next(false);
    }, 1000);
  }

}
