import { HttpErrorResponse, HttpRequest, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeListService } from './employee-list.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-employee',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    public employees: Employee[] = [];

    constructor (
        private employeeListService: EmployeeListService,
        private router: Router
        ) {}

    ngOnInit(): void {
        this.getEmployees();
    }

    public getEmployees(): void {
        this.employeeListService.getEmployees().subscribe(
            (response: Employee[]) => {
                this.employees = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public goToPage(pageName: string): void {
        this.router.navigate([`${pageName}`]);
    }
}