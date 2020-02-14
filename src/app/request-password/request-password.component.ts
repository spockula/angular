import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from './../services/staff.service';
import { NgForm } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Register } from './Register';



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

  constructor(private ngxService: NgxUiLoaderService, private router: Router,
    private staffService: StaffService) { }

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
            this.successMessage = 'Check Your Email For Password reset link.';
            setTimeout(() => {
              this.successMessage = null;
              this.router.navigate(['/login']);
            }, 3000);
            this.ngxService.stop();
          }
        );
  }



}
