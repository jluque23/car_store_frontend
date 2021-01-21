import { Component, OnInit } from '@angular/core';
import { ProductLine } from '../shared/models/productline';
import { ProductlineService } from '../shared/services/productline.service';

@Component({
  selector: 'app-carstore',
  templateUrl: './carstore.component.html',
  styleUrls: ['./carstore.component.css']
})
export class CarstoreComponent implements OnInit {
  productLines: ProductLine[];

  constructor(private productLineService: ProductlineService) { }

  ngOnInit(): void {

    this.productLineService.getProductLines().subscribe(response => {
      this.productLines = response as ProductLine[];
    });
  }

}
