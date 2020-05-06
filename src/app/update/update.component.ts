import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffService } from './../services/staff.service';
import { NgForm } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Register } from './Register';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  register = new Register();
  returnUrl: string;
  ResponseResetForm: FormGroup;
  successMessage: string;
  IsResetFormValid = true;
  errorPassword: string;
  ResetPassword: any;
  staffId: string;
  token: any;
  durationInSeconds: number;

  constructor(private ngxService: NgxUiLoaderService,
    private route: ActivatedRoute, private router: Router,
    private staffService: StaffService, private _snackBar: MatSnackBar) {  }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.staffId)
      .subscribe(params => {
        console.log(params);

        this.staffId = params.staffId;
      });

  }



  public updatePassword(registerForm: NgForm) {
    this.ngxService.start();
    console.log(registerForm.value);
    this.ResponseResetForm = registerForm.value;
    console.log(this.ResponseResetForm['passcode']);
      if (this.ResponseResetForm['confirm'] === this.ResponseResetForm['passcode']) {
        this.ResetPassword = this.ResponseResetForm['passcode'];
        console.log('this is staffId', this.staffId);
        this.staffService.updatePassword(this.staffId, {
          passcode: this.ResetPassword
        }).subscribe(
          data => {
            this.successSnackBar();
            registerForm.resetForm();
            this.ResponseResetForm = registerForm.value;
            this.successMessage = data.message;
            setTimeout(() => {
              this.successMessage = null;
              this.router.navigate(['welcome']);
            }, 3000);
            this.ngxService.stop();
          }, err => {
            this.problemSnackBar();
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

  successSnackBar() {
    this._snackBar.open('Check your email for link to update password', 'Success', {
      duration: this.durationInSeconds * 2000
    });
  }

  problemSnackBar() {
    this._snackBar.open('There was a problem on our end, we will fix this as soon as possible', 'Technical glitch', {
      duration: this.durationInSeconds * 2000
    });
  }

}
