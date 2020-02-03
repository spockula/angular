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

  constructor(private ngxService: NgxUiLoaderService, private registerService: RegisterService,
    private route: ActivatedRoute, private router: Router,  private fb: FormBuilder,
    private staffService: StaffService) { }

  ngOnInit() {
    this.branchId = this.route.snapshot.paramMap.get('_bid');
    console.log(this.branchId);
  }



  public ResetPassword(registerForm: NgForm) {
    this.ngxService.start();
    console.log(registerForm);
    if (registerForm.valid) {
      this.IsResetFormValid = true;
      if (this.ResponseResetForm.value.confirm === this.ResponseResetForm.value.password) {
        this.ResetPassword = this.ResponseResetForm.value.password;
      } else {
        this.errorPassword = 'Passwords do not match, try again';
      }
      this.staffService.newPassword({
        branchId: this.branchId,
        password: this.ResetPassword
      }).subscribe(
        data => {
          this.ResponseResetForm.reset();
          this.successMessage = data.message;
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['sign-in']);
          }, 3000);
          this.ngxService.stop();
        }
      );
    } else { this.IsResetFormValid = false; }
  }

}
