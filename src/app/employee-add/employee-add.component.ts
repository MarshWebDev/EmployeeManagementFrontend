import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timeout } from 'rxjs';
import { DepartmentService } from '../department/department.service';
import { Department } from '../model/department';
import { Employee } from '../model/employee';
import { EmployeeAddService } from './employee-add.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  public departments: Department[] = [];
  public departmentId: number;

  public ChangeDepartment(e: any) {
    console.log(e.target.value);
    this.departmentId = e.target.value;
  }

  constructor(
    private router: Router,
    private addEmployeeService: EmployeeAddService,
    private departmentService: DepartmentService
    ) {}
  
  ngOnInit(): void {
    this.getDepartments();
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

  public navigateToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.addEmployeeService.addEmployee(addForm.value, this.departmentId).subscribe(
      (response: Employee) => {
        console.log(response);
        this.navigateToPage('employees');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
