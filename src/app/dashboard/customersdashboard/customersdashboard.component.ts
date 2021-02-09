import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customersdashboard',
  templateUrl: './customersdashboard.component.html',
  styleUrls: ['./customersdashboard.component.css']
})
export class CustomersdashboardComponent implements OnInit {

  config: any;

  customers: Customer[];
  paginador: any;

  page: number;
  pageSize: number;
  items: number;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.activatedRoute.paramMap.subscribe(params => {
      
      // this.page = +params.get('page');
      
      if (!this.page) {
        this.page = 0;
      }
  
      this.customerService.getCustomers(this.page).subscribe(response =>{
        this.customers = response.content as Customer[];
        this.paginador = response;

        this.pageSize = response.pageable.pageSize;
        this.items = response.totalElements;

      })
    });
  }

  handlePageChange(event) {
    this.page = event;
    this.getCustomers();
  }
}
