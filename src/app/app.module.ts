import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { EmployeeListService } from './employee-list/employee-list.service';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentService } from './department/department.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeAddService } from './employee-add/employee-add.service';

const components = [
  AppComponent,
  EmployeeListComponent,
  EmployeeAddComponent,
  EmployeeComponent,
  DepartmentComponent,
];

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeAddComponent, EmployeeComponent, DepartmentComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [EmployeeListComponent, EmployeeAddService, DepartmentService],
  bootstrap: [components]
})
export class AppModule { }
