import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsbylineComponent } from './productsbyline.component';

describe('ProductsbylineComponent', () => {
  let component: ProductsbylineComponent;
  let fixture: ComponentFixture<ProductsbylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsbylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsbylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
