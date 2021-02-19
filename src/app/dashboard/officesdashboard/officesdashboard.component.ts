import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Office } from 'src/app/shared/models/office';
import { OfficeService } from 'src/app/shared/services/office.service';

@Component({
  selector: 'app-officesdashboard',
  templateUrl: './officesdashboard.component.html',
  styleUrls: ['./officesdashboard.component.css']
})
export class OfficesdashboardComponent implements OnInit {

  offices: Office[];
  paginador: any;

  page = 0;
  pageSize: number;
  items: number;

  constructor(private officeService: OfficeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOffices();
  }

  getOffices() {
    this.activatedRoute.paramMap.subscribe(params => {

      let currentPage = this.page;

      if (!currentPage) {
        currentPage = 0;
      }

      if (currentPage > 0) {
        currentPage = currentPage - 1;
      }

      this.officeService.getOfficesByPage(currentPage).subscribe(response => {
        this.offices = response.content as Office[];
        this.paginador = response;

        this.pageSize = response.pageable.pageSize;
        this.items = response.totalElements;

      });
    });

  }

  handlePageChange(event) {
    this.page = event;
    this.getOffices();
  }

}

