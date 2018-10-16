import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainer from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainer.EmployeeListComponent
  },
  {
    path: 'new',
    component: fromContainer.EmployeeComponent
  },
  {
    path: ':employeeId',
    component: fromContainer.EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
