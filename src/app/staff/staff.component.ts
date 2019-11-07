import { Component, OnInit, ɵConsole, ElementRef  } from '@angular/core';
import { BranchService } from './../services/branch.service';
import { CompanyService } from './../services/company.service';
import { StaffService } from './../services/staff.service';
import { Staff } from './Staff';
import { NgForm } from '@angular/forms';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  DOBstartDate = new Date(1990, 0, 1);
  DateJoinedStartDate = new Date(2000, 0, 1);

  branches: Array<object> = [];
  companies: Array<object> = [];
  departments: Array<object> = [];
  allStaff: Array<object> = [];
  staff = new Staff();
  genders = [{'gender': 'Male'}, {'gender': 'Female'}];
  companyId: any;
  currentUser: any;
  selectedFile: File;
  imagePreview: any;

  constructor(private branchService: BranchService, private companyService: CompanyService,
    private staffService: StaffService, private ngxService: NgxUiLoaderService,
    private departmentService: DepartmentService,
     private actr: ActivatedRoute) {
    // this.getBranches();
    // this.getCompanies();
    // this.getDepartments()
    // this.getStaff();

    this.actr.data.map(data => data.branches).subscribe((res) => {
      console.log('Here I am => ', res);
      console.log(typeof res);
      this.branches = res;
    });


  }


  // ngOnChanges(){
  //   //this.getBranches();
  //   this.getDepartments()
  //   this.getStaff();

  // }
  ngOnInit() {
    // this.getBranches();
    // this.getDepartments()
    // this.getStaff();
    /* this.companyId = '';
    if (localStorage.getItem('cu')) {
      this.currentUser = JSON.parse(localStorage.getItem('cu'));
      this.companyId = this.currentUser['companyId'];
    } */
  }

  public getBranches() {
    this.ngxService.start();
    this.branchService.getCompanyBranches().subscribe((data: Array<object>) => {
      this.branches = data;
      console.log('Branches => ', data);
      this.ngxService.stop();
    });
  }

  public getCompanies() {
    this.ngxService.start();
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      this.companies = data;
      console.log(data);
      this.ngxService.stop();
    });
  }

  public getStaff() {
    this.ngxService.start();
    this.staffService.getCompanyStaff().subscribe((data: Array<object>) => {
      this.allStaff = data;
      console.log(data);
      this.ngxService.stop();
    });
  }


  public createStaff(staff: NgForm) {
    this.ngxService.start();
    console.log(staff.value);
    this.staff = staff.value;
    let companyId = '';
    if (localStorage.getItem('cu')) {
      companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
    this.staff['companyId'] = companyId;
    this.staff['about'] = companyId;

    this.staffService.createStaff(this.staff).subscribe((response) => {
      console.log(response);
      this.staff = new Staff();
      this.getStaff();
      this.ngxService.stop();
    });
  }

  uploadFile(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
    const files = new FormData();
    files.append('files', this.selectedFile, this.selectedFile.name);
    if ( /\.(csv|xlsx)$/i.test(this.selectedFile.name) === false  ) {
      alert('please choose a file in CSV or Excel format!');
    } else {
      this.companyId = 'COY-A52AB';
    this.staffService.submitCsv(this.companyId, files).subscribe(csv => {
      if (csv) {
        console.log('sent', csv);
        alert('Staff Sheet sent to Database');
      } else {
        alert('Data was not sent. Contact Office People Admin ');
      }
    });
    }
  }

  public getDepartments() {
    this.departmentService.getCompanyDepartments().subscribe((data: Array<object>) => {
      this.departments = data;
      console.log(data);
    });
  }

}
