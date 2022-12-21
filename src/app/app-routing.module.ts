import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from "./department/department.component";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeComponent } from "./employee/employee.component";

const routes: Routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path: 'employee/add', component: EmployeeAddComponent},
    {path: 'employee/:id', component: EmployeeComponent},
    {path: 'departments', component: DepartmentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }