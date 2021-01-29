import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesdashboardComponent } from './employeesdashboard.component';

describe('EmployeesdashboardComponent', () => {
  let component: EmployeesdashboardComponent;
  let fixture: ComponentFixture<EmployeesdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
