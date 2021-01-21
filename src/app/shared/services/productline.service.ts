import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../config/config';
import { ProductLine } from '../models/productline';

@Injectable({
  providedIn: 'root'
})
export class ProductlineService {
  private urlEndPoint = `${URL_BACKEND}/api/productlines`;

  constructor(private http: HttpClient, private router: Router) { }

  getProductLines(): Observable<ProductLine[]> {
    return this.http.get<ProductLine[]>(this.urlEndPoint).pipe(
      map((response: any) => {
        (response as ProductLine[]).map(notif => {
          return notif;
        });
        return response;
      })
    );
  }

  createProductLine(productLine: ProductLine): Observable<any>{
    return this.http.post<any>(this.urlEndPoint, productLine).pipe(
      catchError(e =>{
        if(e.status === 400){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

}
