import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import { CompanyService } from './../services/company.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  companyId: any;
  company: Object;
  uploadSuccess: boolean;
  durationInSeconds: number;
  policy: any;

  constructor(private companyService: CompanyService , 
    private ngxService: NgxUiLoaderService, private _snackBar: MatSnackBar) {
   }

  ngOnInit() {
    if (localStorage.getItem('cu')) {
      this.companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
      console.log('this is companyId', this.companyId);
    }
    this.getPolicy();
    this.companyService.getCompanyById().subscribe(csv => {
      this.company = csv['data'][0];
      console.log('this is company', csv);
    });
  }

  upload(files: File[]){
    //pick from one of the 4 styles of file uploads below
    this.ngxService.start();
    this.uploadAndProgress(files);
  }
  
  uploadAndProgress(files: File[]){
    console.log(files)
    var formData = new FormData();
    const headers = new HttpHeaders({'Content-Type':'application/pdf; charset=utf-8'});

    Array.from(files).forEach(f => formData.append('document',f))
    console.log(files[0]['name']);
    formData.append('email', this.company['email']);
      formData.append('companyId', this.companyId);
      formData.append('content', 'red');
      console.log('this is form', formData);
    
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
    this._snackBar.open("Successfully Uploaded New Policy", "Uploaded", {
      duration: this.durationInSeconds * 1000
    })
  }

  closeSnackBar() {
    this._snackBar.open("Something went wrong! We could not upload Ploicy", "Error", {
      duration: this.durationInSeconds * 1000
    })
  }

  public async getPolicy() {
    this.companyService.getPolicy(this.companyId).subscribe((data: Array<object>) => {
     const trial = data['data'];
     console.log('=>', trial);
     this.policy = trial.map(f => f.content);
      console.log('=>', this.policy);
      return this.policy;
    }, err => {
      console.log(err);
    });
  }

}
