import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesdashboardComponent } from './officesdashboard.component';

describe('OfficesdashboardComponent', () => {
  let component: OfficesdashboardComponent;
  let fixture: ComponentFixture<OfficesdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficesdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
