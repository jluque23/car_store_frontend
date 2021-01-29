import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsdashboardComponent } from './paymentsdashboard.component';

describe('PaymentsdashboardComponent', () => {
  let component: PaymentsdashboardComponent;
  let fixture: ComponentFixture<PaymentsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
