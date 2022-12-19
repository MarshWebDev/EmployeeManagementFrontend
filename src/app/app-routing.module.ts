import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from "./department/department.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeComponent } from "./employee/employee.component";

const routes: Routes = [
    {path: 'employee/all', component: EmployeeListComponent},
    {path: 'employee/:id', component: EmployeeComponent},
    {path: 'department/all', component: DepartmentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    EmployeeListComponent, 
    EmployeeComponent,
    DepartmentComponent];