import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {HttpHeaders} from '@angular/common/http';
import { CompanyService } from './../services/company.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  form: FormGroup;
  name = new FormControl('', Validators.required);
  title: 'Company Policy Document';
  companyId: any;
  company: Object;
  percentDone: number;
  uploadSuccess: boolean;
  durationInSeconds: number;
  policy: any;

  constructor(private companyService: CompanyService , fb: FormBuilder,
    private ngxService: NgxUiLoaderService, private _snackBar: MatSnackBar) {
      this.form = fb.group({
        'name': this.name,
      });
   }

  ngOnInit() {
    if (localStorage.getItem('cu')) {
      this.companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
      console.log('this is companyId', this.companyId);
    }
    this.companyService.getCompanyById().subscribe(csv => {
      this.company = csv['data'][0];
      console.log('this is company', csv);
    });
    this.getPolicy();
  }

  upload(files: File[]) {
    this.uploadAndProgress(files);
  }

  uploadAndProgress(files: File[]) {
    this.ngxService.start();
    const form = this.form;
    // tslint:disable-next-line:prefer-const
    let formData = new FormData();
    Array.from(files).forEach(f => formData.append('document', f));
    formData.append('name', this.form.value.name);
    formData.append('email', this.company['email']);
      formData.append('companyId', this.companyId);
      formData.append('content', 'red');
      const trial = {
        'Content-Type': 'application/json'
      };
      console.log('this is trial', trial);

      this.companyService.policyUpload(formData)
      .subscribe(event => {
        console.log('this is policy', event);
        this.uploadSuccess = true;
        this.openSnackBar();
        this.ngxService.stop();
    }, err => {
     this.closeSnackBar();
      this.ngxService.stop();
    });
  }


  openSnackBar() {
    this._snackBar.open('Successfully Uploaded New Policy', 'Uploaded', {
      duration: this.durationInSeconds * 1000
    });
  }

  closeSnackBar() {
    this._snackBar.open('Something went wrong! We could not upload Ploicy', 'Error', {
      duration: this.durationInSeconds * 1000
    });
  }

  public async getPolicy() {
    this.companyService.getPolicy(this.companyId).subscribe((data: Array<object>) => {
      this.policy = data['data'];
      console.log('=>', this.policy);
      return this.policy;
    }, err => {
      console.log(err);
    });
  }

}
