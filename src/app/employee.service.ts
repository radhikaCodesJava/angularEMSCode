import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
//const baseURL ="http://localhost:1234/api/v1/employees";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseURL ="http://localhost:1234/api/v1/employees";
private apiURL ='/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
     //return this.http.get<Employee[]>(`${this.baseURL}`);
      return this.http.get<Employee[]>(this.apiURL);
    }

    createEmployee(employee:Employee):Observable<Object>{
    //return this.http.post(`${this.baseURL}`,employee);
      return this.http.post<Employee>(this.apiURL, employee);
    }

    private handleError(error:HttpErrorResponse){

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        //return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}
