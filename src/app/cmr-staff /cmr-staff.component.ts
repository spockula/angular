import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StaffService } from './../services/staff.service';
import { Staff } from './Staff';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import * as XLSX from 'xlsx';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyService } from '../services/company.service';
import { BranchService } from '../services/branch.service';
import { MatDialog} from '@angular/material/dialog';
import { CmrStaffModalComponent } from '../cmr-staff-modal/cmr-staff-modal.component';

@Component({
  selector: 'app-cmr-staff',
  templateUrl: './cmr-staff.component.html',
  styleUrls: ['./cmr-staff.component.css']
})
export class CmrStaffComponent implements OnInit {
  DOBstartDate = new Date(1990, 0, 1);
  DateJoinedStartDate = new Date(2000, 0, 1);
  durationInSeconds = 5;


  branches: Array<object> = [];
  companies: Array<object> = [];
  departments: Array<object> = [];
  allStaff: Array<object> = [];
  staff = new Staff();
  currentUser: any;
  selectedFile: File;
  form: FormGroup;
  surname = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
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
  savedData: {};

  constructor(private httpClient: HttpClient, private companyService: CompanyService,
    private staffService: StaffService, private ngxService: NgxUiLoaderService, private branchService: BranchService,
    private departmentService: DepartmentService, private _snackBar: MatSnackBar, public dialog: MatDialog,
     private actr: ActivatedRoute, fb: FormBuilder) {
      this.form = fb.group({
        'surname': this.surname,
        'othernames': this.othernames,
        'branchId': this.branchId,
        'email': this.email,
        'companyId': this.companyId,
        'phoneNo': this.phoneNo,
        'gender': this.gender,
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
    this.getStaff();
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
    this.getBranches();
    this.getDepartments();
    this.getCompanies();
    this.getStaff();
  }

  public getStaff() {
    this.staffService.getAllStaff().subscribe((data: Array<object>) => {
      this.allStaff = data;
      console.log(data);
    });
  }

  public getBranches() {
    this.branchService.getBranches().subscribe((data: Array<object>) => {
      this.branches = data['data'];
      console.log('this is branches', this.branches);
    });
  }

  openDialog(companyId) {
    companyId = this.form.value;
    const dialogRef = this.dialog.open(CmrStaffModalComponent,  {
      data: { companyId: companyId }, });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
      this.form.reset();
      this.openSnackBar();
      this.ngxService.stop();
    }, err => {
      console.log('this is error', err['error']['message']);
      alert(err['error']['message']);
      this.ngxService.stop();
    });
  }

  chooseFile(event) {
    this.selectedFile = event.target.files[0];
   if (/\.(csv|xlsx)$/i.test(this.selectedFile.name) === false  ) {
      alert('please choose a file in CSV or Excel format!');
      event.srcElement.value = null;
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

uploadFile(event, form) {
  form = this.form;
  console.log('this is selected file', this.selectedFile);
  this.staffs = form.value;
  console.log('this is form value', form.value.companyId);
  this.selectedFile = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(this.selectedFile);
  const files = new FormData();
  files.append('files', this.selectedFile, this.selectedFile.name);
  if ( /\.(csv|xlsx)$/i.test(this.selectedFile.name) === false) {
    alert('please choose a file in CSV or Excel format!');
  } else if (form.value.companyId === '') {
      alert('please enter company ID to upload staff.');
      this.ngxService.stop();
    } else {
    const companyId = form.value.companyId;
  this.staffService.submitCsv(companyId, files).subscribe(csv => {
      console.log('sent', csv);
      this.openSnackBar();
  }, err => {
    console.log('this is error', err['error']['message']);
    alert(err['error']['message']);
    this.ngxService.stop();
  }); }

}

public getDepartments() {
  this.departmentService.getDepartments().subscribe((data: Array<object>) => {
    this.departments = data['data'];
    console.log('this is departments', this.departments);
  });
}

  public getCompanies() {
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      this.companies = data['data'];
      console.log('this is companies', this.companies);
    });
  }

  downloadFile() {
    // tslint:disable-next-line:max-line-length
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTIngBeZzWRtWn81mzxomibZjW73zo9QX-qVrJIzeJOt7Xj0r0swIuqaCelKFDoMbs6Rkh1wT2VozY1/pub?output=xlsx';
      this.httpClient.get(url, {responseType: 'arraybuffer'})
      .subscribe((res) => {
          this.writeContents(res, 'staff.xlsx', 'xlsx/excel'); // file extension
      });
  }

  writeContents(content, fileName, contentType) {
      const a = document.createElement('a');
      const file = new Blob([content], {type: contentType});
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }

openSnackBar() {
  this._snackBar.open('Successfully uploaded Staff', 'uploaded', {
    duration: this.durationInSeconds * 1000
  });
}

}
