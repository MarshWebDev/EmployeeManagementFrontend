import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeListService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
        //Make the '/employee/all' some other environment variable that is passed in from the backend,
        //so all backend url APIs can be controlled from the java code
    }

    public getEmployee(employeeId: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiServerUrl}/employee/${employeeId}`)
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
    }

    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`)
    }
}