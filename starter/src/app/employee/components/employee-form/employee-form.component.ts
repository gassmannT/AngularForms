import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/index';

@Component({
  selector: 'app-employee-form',
  templateUrl: 'employee-form.component.html',
  styleUrls: ['employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input()
  employee: Employee;

  @Output()
  create = new EventEmitter<Employee>();
  @Output()
  update = new EventEmitter<Employee>();
  @Output()
  remove = new EventEmitter<Employee>();

  isEdit = false;
  title = 'Create';

  constructor(private service: EmployeeService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.employee && this.employee.id) {
      this.isEdit = true;
      this.title = 'Edit';
      // this.form.patchValue(this.employee);
    }
  }

  createEmployee(f) {
    if (f.valid) {
      this.create.emit(this.employee);
    }
  }

  updateEmployee(f) {
    if (f.touched && f.valid) {
      this.update.emit(this.employee);
    }
  }

  removeEmployee() {
    this.remove.emit(this.employee);
  }



  // get firstname() {
  //   return this.form.get('firstname');
  // }
  // get lastname() {
  //   return this.form.get('lastname');
  // }
  // get email() {
  //   return this.form.get('email');
  // }
  // get emailConfirm() {
  //   return this.form.get('emailConfirm');
  // }
}
