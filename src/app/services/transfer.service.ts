import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CsTransaction } from '../common/interface/cs-transaction.interface';
import { LoaderService } from '../common/service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private loaderService: LoaderService) { }

  /**
   * Post transaction of transfer service
   */
  postTransaction = (trans: CsTransaction[]): Observable<any> => {
    this.loaderService.isLoading.next(true);

    let response = { data: trans };
    return of(response);
  }
}
