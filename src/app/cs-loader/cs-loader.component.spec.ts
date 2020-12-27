import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLoaderComponent } from './cs-loader.component';

describe('CsLoaderComponent', () => {
  let component: CsLoaderComponent;
  let fixture: ComponentFixture<CsLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
