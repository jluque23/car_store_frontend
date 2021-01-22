import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../config/config';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlEndPoint = `${URL_BACKEND}/api/products`;

  constructor(private http: HttpClient, private router:Router) { }

  getProducts(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((response: any) => {
        (response.content as Product[]).map(product => {
          return product;
        });
        return response;
      })
    );
  }

  getProductsByProductLine(id): Observable<any>{
    return this.http.get<Product[]>(`${this.urlEndPoint}/findbyproductline/${id}`).pipe(
      catchError(e => {
        if (e.status !== 401 && e.error.mensaje) {
          Swal.fire('Inexistent Product!', `${e.error.mensaje}!`, 'error').then((result) => {
            if (result.value) {
              this.router.navigate(['/openedbugs']);
            }
          });
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

}
