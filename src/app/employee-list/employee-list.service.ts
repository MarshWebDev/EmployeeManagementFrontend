import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Page } from './employee-list-page';

@Injectable({
    providedIn: 'root'
})
export class EmployeeListService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getEmployees(page: number = 0): Observable<Page> {
        return this.http.get<Page>(`${this.apiServerUrl}/employee/all?page=${page}`);
        //Make the '/employee/all' some other environment variable that is passed in from the backend,
        //so all backend url APIs can be controlled from the java code
    }
}