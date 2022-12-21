import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeListService } from './employee-list.service';
import { Router } from '@angular/router';
import { Page } from './employee-list-page';
import { NgForm } from '@angular/forms';

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

    //This doesn't work because it is dependent on which page the employee page is on
    public searchEmployees(key: string): void {
        console.log(key);
        const results: Employee[] = [];
        for (const employee of this.employees) {
          if (employee.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
          || employee.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
            results.push(employee);
          }
        }
    
        this.employees = results;
        if (results.length === 0 || !key) {
          this.getEmployees();
        }
    }
    
    public goToPage(pageNumber?: number): void {
        this.getEmployees(pageNumber);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    public navigateToPage(pageName: string): void {
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