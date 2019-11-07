import { Component, OnInit } from '@angular/core';
import { BranchService } from './../services/branch.service';
import { CompanyService } from './../services/company.service';
import { Branch } from './Branch';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branches: Array<object> = [];
  companies: Array<object> = [];
  branch = new Branch();

  constructor(private branchService: BranchService, private companyService: CompanyService) { }

  ngOnInit() {
    this.getBranches();
    this.getCompanies();
  }


  public getBranches() {
    this.branchService.getCompanyBranches().subscribe((data: Array<object>) => {
      this.branches = data;
      console.log(data);
    });
  }

  public getCompanies() {
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      this.companies = data['data'];
      console.log(data);
    });
  }

  public createBranch(branch: NgForm) {
    console.log(branch.value);
    this.branch = branch.value;
    let companyId = '';
    if (localStorage.getItem('cu')) {
      companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
    this.branch['companyId'] = companyId;

    this.branchService.createBranch(this.branch).subscribe((response) => {
      console.log(response);
      this.branch = new Branch();
      this.getBranches();
    });
  }

}
