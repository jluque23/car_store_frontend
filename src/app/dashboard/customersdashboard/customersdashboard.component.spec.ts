import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersdashboardComponent } from './customersdashboard.component';

describe('CustomersdashboardComponent', () => {
  let component: CustomersdashboardComponent;
  let fixture: ComponentFixture<CustomersdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
