import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Department } from '../model/department';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAddService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addEmployee(employee: Employee, departmentId: number): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, {employee, departmentId});
  }
}
