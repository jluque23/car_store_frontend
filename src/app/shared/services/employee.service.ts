import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { Customer } from '../models/customer';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlEndPoint = `${URL_BACKEND}/api/employees`;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlEndPoint).pipe(
      map((response: any) => {
        (response as Employee[]).map(employee => {
          return employee;
        });
        return response;
      })
    );
  }

  getEmployeesByPage(page: number): Observable<any>{
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((response: any) =>{
        (response.content as Employee[]).map(employee =>{
           return Customer;
        })
        return response;
      })
    );
  }

}
