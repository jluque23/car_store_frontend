import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-productsdashboard',
  templateUrl: './productsdashboard.component.html',
  styleUrls: ['./productsdashboard.component.css']
})
export class ProductsdashboardComponent implements OnInit {

  products: Product[];

  paginador: any;
  page = 0;
  pageSize: number;
  items: number;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.activatedRoute.paramMap.subscribe(params =>{
      
      let currentPage = this.page;

      if(!currentPage){
        currentPage = 0;
      }

      if(currentPage > 0){
        currentPage = currentPage - 1;
      }

      this.productService.getProducts(currentPage).subscribe(response =>{
        this.products = response.content as Product[];
        this.paginador = response;

        this.pageSize = response.pageable.pageSize;
        this.items = response.totalElements;
      });

    });
  }

  handlePageChange(event){
    this.page = event;
    this.getProducts();
  }
}
