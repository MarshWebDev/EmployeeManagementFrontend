import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../department/department.service';
import { Department } from '../model/department';
import { Employee } from '../model/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employee: Employee;
  public departments: Department[];
  public departmentId: number;

  public ChangeDepartment(e: any) {
    console.log(e.target.value);
    this.departmentId = e.target.value;
  }

  constructor(
    private employeeService: EmployeeService, 
    private departmentService: DepartmentService,
    private router: Router) {}

  ngOnInit(): void {
    const employeeId = parseInt(this.router.url.charAt(this.router.url.length - 1))
    this.getEmployee(employeeId);
    this.getDepartments();
  }

  public getEmployee(employeeId: number): void {
    this.employeeService.getEmployee(employeeId).subscribe(
      (response: Employee) => {
        this.employee = response;
        this.departmentId = response.department.id;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (response: Department[]) => {
        this.departments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public updateEmployee(employee: Employee): void {
    console.log(`Department Id: ${this.departmentId}`)
    this.employeeService.updateEmployee(employee, this.departmentId).subscribe(
      (response: Employee) => {
        console.log(response);
        this.navigateToPage('employees');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public navigateToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
