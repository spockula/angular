import { Component, OnInit, ɵConsole, ElementRef  } from '@angular/core';
import { BranchService } from './../services/branch.service';
import { CompanyService } from './../services/company.service';
import { StaffService } from './../services/staff.service';
import { Staff } from './Staff';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import * as XLSX from 'xlsx';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { StaffModalComponent } from '../staff-modal/staff-modal.component';


@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
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
  imagePreview: any;
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
  deptName: any;


  constructor(private companyService: CompanyService, public dialog: MatDialog,
    private staffService: StaffService, private ngxService: NgxUiLoaderService, public branchService: BranchService,
    private departmentService: DepartmentService, private _snackBar: MatSnackBar,
     private actr: ActivatedRoute, fb: FormBuilder, private httpClient: HttpClient) {
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
    this.getStaff();
    if (localStorage.getItem('cu')) {
      this.companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
    this.getDepartments();
    this.getBranches();
  }

  public getBranches() {
    this.ngxService.start();
    this.branchService.getCompanyBranches().subscribe((data: Array<object>) => {
      this.branches = data['data'];
      console.log('Branches => ', this.branches);
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
      this.openSnackBar();
      this.ngxService.stop();
    }, err => {
      console.log('this is error', err['error']['message']);
      alert(err['error']['message']);
      this.form.reset();
      this.ngxService.stop();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(StaffModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
      console.log('this is uploaded data', csv);
      if (csv['data']['errorFromSaving']) {
       this.unsavedSnackBar();
      } else {
        this.openSnackBar();
      }

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
  };
  reader.readAsBinaryString(this.selectedFile);
  }
}


  public getDepartments() {
    this.departmentService.getCompanyDepartments().subscribe((data: Array<object>) => {
      this.departments = data['data'];
      console.log('this is department', this.departments);
    });
  }

  openSnackBar() {
    this._snackBar.open('Successfully uploaded Staff', 'uploaded', {
      duration: this.durationInSeconds * 1000
    });
  }

  emailSnackBar() {
    this._snackBar.open('Could not save some staff because Email already exist.', 'Email Already saved', {
      duration: this.durationInSeconds * 1000
    });
  }

  unsavedSnackBar() {
    // tslint:disable-next-line:quotemark
    // tslint:disable-next-line:max-line-length
    this._snackBar.open('Some staff could not be saved. Use the preview option to see staff without required data and make necessary corrections', 'Error saving some staff', {
      duration: this.durationInSeconds * 3000
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




}
