import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { BranchService } from '../services/branch.service';
import { StaffService } from '../services/staff.service';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalCompanies = 0;
  totalBranches = 0;
  totalStaff = 0;
  totalDepartments = 0;

  constructor(private companyService: CompanyService, private branchService: BranchService,
     private staffService: StaffService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics() {
    this.companyService.getCompanyById().subscribe((data: Array<object>) => {
      console.log(data);
      this.totalCompanies = data['data'].length;
    });


    this.branchService.getCompanyBranches().subscribe((data: Array<object>) => {
      console.log(data);
      this.totalBranches = data['data'].length;
    });


    this.staffService.getCompanyStaff().subscribe((data: Array<object>) => {
      console.log(data);
      this.totalStaff = data['data'].length;
    });

    this.departmentService.getCompanyDepartments().subscribe((data: Array<object>) => {
      console.log(data);
      this.totalDepartments = data['data'].length;
    });

  }


}


