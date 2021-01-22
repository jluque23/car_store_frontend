import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Office } from '../shared/models/office';
import { OfficeService } from '../shared/services/office.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  offices: Office[];
  urlSafe: SafeResourceUrl;

  constructor(private officeService: OfficeService,public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.officeService.getOffices().subscribe( response => {
      this.offices = response as Office[];
    });
  }

  makeGoogleMaps(direction): string {
    direction = direction.replace("null","");
    direction = direction.replace(/\s/g, "%20");
    
    return direction;
  }

  makeGoogleMap(office: Office): SafeResourceUrl {
    let direction = office.address_line_1+" "+office.address_line_2+ " " +office.city+" "+office.country+" "+office.postal_code;
    direction = direction.replace("null","");
    direction = direction.replace(/\s/g, "%20");
    let newDirection = "https://maps.google.com/maps?q="+direction+"&t=&z=13&ie=UTF8&iwloc=&output=embed";
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(newDirection);

    return this.urlSafe;
  }

}
