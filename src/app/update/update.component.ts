import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffService } from './../services/staff.service';
import { NgForm } from '@angular/forms';
import { RegisterService } from './../services/register.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Register } from './Register';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  register = new Register();
  returnUrl: string;
  branchId: any;
  ResponseResetForm: FormGroup;
  successMessage: string;
  IsResetFormValid = true;
  errorPassword: string;
  ResetPassword: any;

  constructor(private ngxService: NgxUiLoaderService, private registerService: RegisterService,
    private route: ActivatedRoute, private router: Router,  private fb: FormBuilder,
    private staffService: StaffService) { }

  ngOnInit() {
    this.branchId = this.route.snapshot.paramMap.get('_bid');
    console.log(this.branchId);
  }



  public updatePassword(registerForm: NgForm) {
    this.ngxService.start();
    console.log(registerForm.value);
    this.ResponseResetForm = registerForm.value;
    console.log(this.ResponseResetForm['passcode']);
      if (this.ResponseResetForm['confirm'] === this.ResponseResetForm['passcode']) {
        this.ResetPassword = this.ResponseResetForm['passcode'];
        this.staffService.newPassword({
          branchId: this.branchId,
          password: this.ResetPassword
        }).subscribe(
          data => {
            registerForm.resetForm();
            this.ResponseResetForm = registerForm.value;
            this.successMessage = data.message;
            setTimeout(() => {
              this.successMessage = null;
              this.router.navigate(['welcome']);
            }, 3000);
            this.ngxService.stop();
          }
        );
      }
      if (this.ResponseResetForm['confirm'] !== this.ResponseResetForm['passcode']) {
        this.errorPassword = 'Passwords do not match, try again';
        registerForm.resetForm();
        this.ResponseResetForm = registerForm.value;
        this.ngxService.stop();
      }
  }

}
