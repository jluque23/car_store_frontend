import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-productsbyline',
  templateUrl: './productsbyline.component.html',
  styleUrls: ['./productsbyline.component.css']
})
export class ProductsbylineComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{

    this.activatedRoute.paramMap.subscribe(params => {
      
      const id = +params.get('productLineId');
      
      this.productService.getProductsByProductLine(id).subscribe(response => {
        
        this.products = response as Product[];
        
      })
    });
  }


}
