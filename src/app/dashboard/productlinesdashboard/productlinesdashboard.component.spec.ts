import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlinesdashboardComponent } from './productlinesdashboard.component';

describe('ProductlinesdashboardComponent', () => {
  let component: ProductlinesdashboardComponent;
  let fixture: ComponentFixture<ProductlinesdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlinesdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlinesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
