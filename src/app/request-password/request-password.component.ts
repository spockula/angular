import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from './../services/staff.service';
import { NgForm } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Register } from './Register';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.css']
})
export class RequestPasswordComponent implements OnInit {
  register = new Register();
  returnUrl: string;
  token: any;
  successMessage: string;
  IsResetFormValid = true;
  errorPassword: string;
  FormValue: any;
  ResetEmail: any;
  durationInSeconds: number;

  constructor(private ngxService: NgxUiLoaderService, private router: Router,
    private staffService: StaffService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public ResetPassword(registerForm: NgForm) {
    this.ngxService.start();
    console.log(registerForm.value);
    this.FormValue = registerForm.value;
   this.ResetEmail = this.FormValue['email'];
   this.staffService.newPassword({
     email: this.ResetEmail,
     type: 'User'
   }).subscribe(
          data => {
            registerForm.resetForm();
            this.FormValue = registerForm.value;
           this.successSnackBar();
           this.router.navigate(['/login']);
            this.ngxService.stop();
          }
        );
  }

  successSnackBar() {
    this._snackBar.open('Check your email for link to update password', 'Success', {
      duration: this.durationInSeconds * 2000
    });
  }



}
