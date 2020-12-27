import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CsHeaderComponent } from './cs-header/cs-header.component';
import { CsTransactionsComponent } from './cs-transactions/cs-transactions.component';
import { CsTransferComponent } from './cs-transfer/cs-transfer.component';
import { CsLoaderComponent } from './cs-loader/cs-loader.component';

import { TransactionsService } from './services/transactions.service';
import { CurrencyFormatterDirective } from './common/directive/currency-formatter.directive';
import { SharedDataService } from './common/shared-data/shared-data.service';
import { TransferService } from './services/transfer.service';
import { DataFilterPipe } from './common/pipes/data-filter.pipe';
import { SortPipe } from './common/pipes/sort.pipe';
import { InterceptorService } from './common/service/interceptor.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CloneDeepFormatterPipe } from './common/pipes/clone-deep-formatter.pipe';
import { PanelHeadingComponent } from './common/component/panel-heading/panel-heading.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CsHeaderComponent,
    CsTransactionsComponent,
    CsTransferComponent,
    CsLoaderComponent,
    CurrencyFormatterDirective,
    DataFilterPipe,
    SortPipe,
    CloneDeepFormatterPipe,
    PanelHeadingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TransactionsService,
    TransferService,
    SharedDataService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
