import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeListService } from './employee-list.service';
import { Router } from '@angular/router';
import { Page } from './employee-list-page';

const CACHE_KEY = 'httpRepoCache';

@Component({
    selector: 'app-employee',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    public employees: Employee[] = [];
    public page!: Page;

    constructor (
        private employeeListService: EmployeeListService,
        private router: Router
        ) {}

    ngOnInit(): void {
        this.getEmployees();
    }

    public getEmployees(page: number = 0): void {
        this.employeeListService.getEmployees(page).subscribe(
            (response: Page) => {
                console.log(response);
                this.page = response;
                this.employees = response.content;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public goToPage(pageNumber?: number): void {
        this.getEmployees(pageNumber);
    }

    public goToEmployeeProfile(pageName: string): void {
        this.router.navigate([`${pageName}`]);
    }

    public goToNextOrPreviousPage(direction: string): void {
        this.goToPage(
            direction === 'next' ? 
            this.page.number + 1 : 
            this.page.number -1
            )
    }
}