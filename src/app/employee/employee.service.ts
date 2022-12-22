import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private apiServerUrl = environment.apiBaseUrl;

  public employee: Employee;

  constructor(private http: HttpClient) { }

  public getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/employee/${employeeId}`)
  }

  public updateEmployee(employee: Employee, departmentId: number): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, {employee, departmentId});
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`)
  }
}
