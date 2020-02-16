import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
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
  ResponseResetForm: FormGroup;
  successMessage: string;
  IsResetFormValid = true;
  errorPassword: string;
  ResetPassword: any;
  staffId: string;
  token: any;

  constructor(private ngxService: NgxUiLoaderService,
    private route: ActivatedRoute, private router: Router,
    private staffService: StaffService) {  }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.staffId)
      .subscribe(params => {
        console.log(params);

        this.staffId = params.staffId;
        sessionStorage.setItem('staffId', this.staffId);
        console.log(this.staffId);
      });
      // this.route.queryParams.filter(params => params.token)
      // .subscribe(params => {
      //  console.log(params);
       // this.token = params.token;
       // localStorage.setItem('token', this.token);
       // console.log(this.token);
      // });
  }



  public updatePassword(registerForm: NgForm) {
    this.ngxService.start();
    console.log(registerForm.value);
    this.ResponseResetForm = registerForm.value;
    console.log(this.ResponseResetForm['passcode']);
      if (this.ResponseResetForm['confirm'] === this.ResponseResetForm['passcode']) {
        this.ResetPassword = this.ResponseResetForm['passcode'];
        const tempo = sessionStorage.getItem('staffId');
        const fino = sessionStorage.getItem('token');
        console.log('this is tempo', tempo);
        console.log('this is fino', fino);
        this.staffId = tempo;
        this.token = fino;
        this.staffService.updatePassword(this.staffId, {
          passcode: this.ResetPassword
        }).subscribe(
          data => {
            registerForm.resetForm();
            sessionStorage.clear(); // to entirely clear local storage
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
