import { Component, OnInit, ɵConsole, ElementRef  } from '@angular/core';
import { BranchService } from './../services/branch.service';
import { CompanyService } from './../services/company.service';
import { StaffService } from './../services/staff.service';
import { Staff } from './Staff';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cmr-staff',
  templateUrl: './cmr-staff.component.html',
  styleUrls: ['./cmr-staff.component.css']
})
export class CmrStaffComponent implements OnInit {
  DOBstartDate = new Date(1990, 0, 1);
  DateJoinedStartDate = new Date(2000, 0, 1);

  branches: Array<object> = [];
  companies: Array<object> = [];
  departments: Array<object> = [];
  allStaff: Array<object> = [];
  staff = new Staff();
  currentUser: any;
  selectedFile: File;
  imagePreview: any;
  form: FormGroup;
  surname = new FormControl('', Validators.required);
  genders = new FormControl([{'gender': 'Male'}, {'gender': 'Female'}], Validators.required);
  othernames = new FormControl('', Validators.required);
  branchId = new FormControl('', Validators.required);
  companyId = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  phoneNo = new FormControl('', Validators.required);
  role = new FormControl('', Validators.required);
  date_of_birth = new FormControl('', Validators.required);
  date_joined = new FormControl('', Validators.required);
  departmentId = new FormControl('', Validators.required);
  staffs: any;

  constructor(private branchService: BranchService, private companyService: CompanyService,
    private staffService: StaffService, private ngxService: NgxUiLoaderService,
    private departmentService: DepartmentService,
     private actr: ActivatedRoute, fb: FormBuilder) {
      this.form = fb.group({
        'surname': this.surname,
        'othernames': this.othernames,
        'branchId': this.branchId,
        'email': this.email,
        'companyId': this.companyId,
        'phoneNo': this.phoneNo,
        'gender': this.genders,
        'role': this.role,
        'date_of_birth': this.date_of_birth,
        'date_joined': this.date_joined,
        'departmentId': this.departmentId,
        'about': this.companyId
    });
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
    this.getStaff();
  }

  public getBranches() {
    this.ngxService.start();
    this.branchService.getCompanyBranches().subscribe((data: Array<object>) => {
    const trial = data['data'];
    const again = [];
    for (let count = 0; count < trial.length; count++) {
      again.push(trial[count]);
    }
    this.branches = again;
      console.log('Branches => ', this.branches);
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
    this.staffService.getAllStaff().subscribe((data: Array<object>) => {
      this.allStaff = data;
      console.log(data);
      this.ngxService.stop();
    });
  }


  public createStaff(form) {
    this.ngxService.start();
    form = this.form;
    console.log('this is form value', form.value);
    this.staff = form.value;

    this.staffService.createStaff(this.staff).subscribe((response) => {
      console.log('this is response', response);
      this.staff = new Staff();
      this.getStaff();
      this.ngxService.stop();
    });
  }

  uploadFile(event, form) {
    form = this.form;
    this.staffs = form.value;
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
      this.companyId = this.staffs.companyId;
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
