import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { EmployeeListService } from './employee-list/employee-list.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentService } from './department/department.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmployeeComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [EmployeeListService, DepartmentService],
  bootstrap: [AppComponent, EmployeeComponent, DepartmentComponent]
})
export class AppModule { }
