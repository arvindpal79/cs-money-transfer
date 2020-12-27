import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTransferComponent } from './cs-transfer.component';

describe('CsTransferComponent', () => {
  let component: CsTransferComponent;
  let fixture: ComponentFixture<CsTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
