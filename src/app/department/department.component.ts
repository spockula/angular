import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './../services/department.service';
import { CompanyService } from './../services/company.service';
import { Department } from './Department';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Array<object> = [];
  companies: Array<object> = [];
  department = new Department();
  form: FormGroup;
  name = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);

  constructor(private departmentService: DepartmentService, private companyService: CompanyService,
    fb: FormBuilder) {
      this.form = fb.group({
        'name': this.name,
        'email': this.email,
        'description': this.description
    });
     }

  ngOnInit() {
    this.getDepartments();
    this.getCompanies();
  }

  // tslint:disable-next-line: use-life-cycle-interface
  /* ngOnChanges() {
    this.getCompanies();
  } */

  public getDepartments() {
    this.departmentService.getCompanyDepartments().subscribe((data: Array<object>) => {
      this.departments = data;
      console.log(data);
    });
  }

  public getCompanies() {
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      this.companies = data;
      console.log(data);
    });
  }

  public createDepartment(form) {
    form = this.form;
    console.log(form.value);
    this.department = form.value;
    this.departmentService.createDepartment(this.department).subscribe((response) => {
      console.log(response);
      this.department = new Department();
      this.getDepartments();
    });
  }

}
