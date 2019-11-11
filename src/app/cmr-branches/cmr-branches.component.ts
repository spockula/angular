import { Component, OnInit } from '@angular/core';
import { BranchService } from './../services/branch.service';
import { CompanyService } from './../services/company.service';
import { Branch } from './Branch';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cmr-branches',
  templateUrl: './cmr-branches.component.html',
  styleUrls: ['./cmr-branches.component.css']
})
export class CmrBranchesComponent implements OnInit {

  form: FormGroup;
  branches: Array<object> = [];
  companies: Array<object> = [];
  branch = new Branch();
  branchName = new FormControl('', Validators.required);
  phoneNo = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  companyId = new FormControl('', Validators.required);

  constructor(private branchService: BranchService, private companyService: CompanyService, fb: FormBuilder) { 
    this.form = fb.group({
      'branchName': this.branchName,
      'phoneNo': this.phoneNo,
      'email': this.email,
      'address': this.address,
      'companyId': this.companyId
  });
  }
  
  ngOnInit() {
    this.getBranches();
    this.getCompanies();
  }

  public getBranches() {
    this.branchService.getBranches().subscribe((data: Array<object>) => {
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

  public createBranch(form) {
    form = this.form;
    console.log(form.value);
    this.branch = form.value;

    this.branchService.createBranch(this.branch).subscribe((response) => {
      console.log(response);
      this.branch = new Branch();
      this.getBranches();
    });
  }


}
