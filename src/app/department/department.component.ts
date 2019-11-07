import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './../services/department.service';
import { CompanyService } from './../services/company.service';
import { Department } from './Department';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Array<object> = [];
  companies: Array<object> = [];
  department = new Department();

  constructor(private departmentService: DepartmentService, private companyService: CompanyService) { }

  ngOnInit() {
    this.getDepartments();
    this.getCompanies();
  }

  ngOnChanges(){
    this.getCompanies();
  }

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

  public createDepartment(department: NgForm) {
    console.log(department.value);
    this.department = department.value;
    this.departmentService.createDepartment(this.department).subscribe((response) => {
      console.log(response);
      this.department = new Department();
      this.getDepartments();
    });
  }

}
