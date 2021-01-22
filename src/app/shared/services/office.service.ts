import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { Office } from '../models/office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private urlEndPoint = `${URL_BACKEND}/api/offices`;
  
  constructor(private http: HttpClient, private router: Router) { }

  getOffices(): Observable<Office[]> {
    return this.http.get<Office[]>(this.urlEndPoint).pipe(
      map((response: any) => {
        (response as Office[]).map(office => {
          return office;
        });
        return response;
      })
    );
  }
  
  getOfficesPagination(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint +'/page/' + page).pipe(
      map((response: any) =>{
      (response.content as Office[]).map(office => {
       return office; 
      })
      return response;
      })
    );
  }

}
