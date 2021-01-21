import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarstoreComponent } from './carstore.component';

describe('CarstoreComponent', () => {
  let component: CarstoreComponent;
  let fixture: ComponentFixture<CarstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
