import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTransactionsComponent } from './cs-transactions.component';

describe('CsTransactionsComponent', () => {
  let component: CsTransactionsComponent;
  let fixture: ComponentFixture<CsTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
