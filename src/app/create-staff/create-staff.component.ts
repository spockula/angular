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
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
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
  genders = ['', 'Male', 'Female'];
  companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
  form: FormGroup;
  surname = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  othernames = new FormControl('', Validators.required);
  branchId = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  phoneNo = new FormControl('', Validators.required);
  role = new FormControl('', Validators.required);
  date_of_birth = new FormControl('', Validators.required);
  date_joined = new FormControl('', Validators.required);
  line_manager_id = new FormControl('', Validators.required);
  reporting_line_ids = new FormControl('', Validators.required);
  departmentId = new FormControl('', Validators.required);
  staffs: any;
  savedData: any;


  constructor(private branchService: BranchService, private companyService: CompanyService,
    private staffService: StaffService, private ngxService: NgxUiLoaderService,
    private departmentService: DepartmentService,
     private actr: ActivatedRoute, fb: FormBuilder) {
      this.form = fb.group({
        'surname': this.surname,
        'othernames': this.othernames,
        'branchId': this.branchId,
        'email': this.email,
        'phoneNo': this.phoneNo,
        'gender': this.gender,
        'role': this.role,
        'date_of_birth': this.date_of_birth,
        'date_joined': this.date_joined,
        'line_manager_id': this.line_manager_id,
        'reporting_line_ids': this.reporting_line_ids,
        'departmentId': this.departmentId,
        'about': this.companyId,
        'companyId': this.companyId
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


  ngOnInit() {
    if (localStorage.getItem('cu')) {
      this.companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
    this.getBranches();
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
    this.staffService.getCompanyStaff().subscribe((data: Array<object>) => {
      this.allStaff = data;
      console.log(data);
      this.ngxService.stop();
    });
  }


  public createStaff(form) {
    form = this.form;
    this.ngxService.start();
    console.log(form.value);
    this.staff = form.value;

    this.staffService.createStaff(this.staff).subscribe((response) => {
      console.log(response);
      this.staff = new Staff();
      this.getStaff();
      this.form.reset();
      this.ngxService.stop();
    }, err => {
      console.log('this is error', err['error']['message']);
      alert(err['error']['message']);
      this.form.reset();
      this.ngxService.stop();
    });
  }

  uploadFile(event, form) {
    form = this.form;
    this.staffs = form.value;
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    const files = new FormData();
    files.append('files', this.selectedFile, this.selectedFile.name);
      this.companyId = this.staffs.companyId;
    this.staffService.submitCsv(this.companyId, files).subscribe(csv => {
        alert('Uploaded Successfully');
    } , err => {
      console.log('this is error', err['error']['message']);
      alert(err['error']['message']);
      this.form.reset('');
      this.ngxService.stop();
    });
    }

  chooseFile(event) {
    this.selectedFile = event.target.files[0];
    const file = this.selectedFile;
   if (/\.(csv|xlsx)$/i.test(this.selectedFile.name) === false  ) {
      alert('please choose a file in CSV or Excel format!');
  } else {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = (<any>e.target).result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.savedData = jsonData;
      console.log('this is saced data', this.savedData);
  };
  reader.readAsBinaryString(this.selectedFile);
  }
}


  public getDepartments() {
    this.departmentService.getCompanyDepartments().subscribe((data: Array<object>) => {
      this.departments = data;
      console.log(data);
    });
  }



}
