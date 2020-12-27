import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CsTransaction } from '../common/interface/cs-transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  public getTransactions = (): Observable<any> => {
    return this.http.get<CsTransaction[]>("./assets/mock-services/transactions.json");
  }
}
