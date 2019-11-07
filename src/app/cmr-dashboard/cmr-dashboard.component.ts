import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { BranchService } from '../services/branch.service';
import { StaffService } from '../services/staff.service';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-cmr-dashboard',
  templateUrl: './cmr-dashboard.component.html',
  styleUrls: ['./cmr-dashboard.component.css']
})
export class CmrDashboardComponent implements OnInit {

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
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      console.log(data);
      this.totalCompanies = data['data'].length;
    });


    this.branchService.getBranches().subscribe((data: Array<object>) => {
      console.log(data);
      this.totalBranches = data['data'].length;
    });


    this.staffService.getAllStaff().subscribe((data: Array<object>) => {
      console.log(data);
      this.totalStaff = data['data'].length;
    });

    this.departmentService.getDepartments().subscribe((data: Array<object>) => {
      console.log(data);
      this.totalDepartments = data['data'].length;
    });

  }


}
