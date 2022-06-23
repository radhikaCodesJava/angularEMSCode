import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
//const baseURL ="http://localhost:1234/api/v1/employees";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

//private baseURL ="http://localhost:1234/api/v1/employees";

  constructor(private http: HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
     // return this.http.get<Employee[]>(`${this.baseURL}`);
      return this.http.get<Employee[]>('/url/api/v1/employees');
    }
}
