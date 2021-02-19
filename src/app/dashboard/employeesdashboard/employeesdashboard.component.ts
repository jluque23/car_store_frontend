import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employeesdashboard',
  templateUrl: './employeesdashboard.component.html',
  styleUrls: ['./employeesdashboard.component.css']
})
export class EmployeesdashboardComponent implements OnInit {

  employees: Employee[];

  paginador: any;
  page = 0;
  pageSize: number;
  items: number;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployees();    
  }

  getEmployees(){
    this.activatedRoute.paramMap.subscribe(params => {

      let currentPage = this.page;

      if(!currentPage){
        currentPage = 0;
      }

      if(currentPage > 0){
        currentPage = currentPage - 1;
      }

      this.employeeService.getEmployeesByPage(currentPage).subscribe(response =>{
        this.employees = response.content as Employee[];
        this.paginador = response;

        this.pageSize = response.pageable.pageSize;
        this.items = response.totalElements;
        
      })
    });
  }

  handlePageChange(event){
    this.page = event;
    this.getEmployees();    
  }

}
