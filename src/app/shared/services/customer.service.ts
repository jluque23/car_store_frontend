import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private urlEndPoint = `${URL_BACKEND}/api/customers`;

  constructor(private http: HttpClient, private router: Router) { }

  getCustomers(page: number): Observable<any>{
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((response: any) =>{
        (response.content as Customer[]).map(customer => {
          
          return customer;
        })
        return response;
      })
    );
    
  }

  getUrlPaginator(){
    let newUrl = this.urlEndPoint+'/page/';
    return newUrl;
  }
}
