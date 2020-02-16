import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffService } from './../services/staff.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'rxjs/add/operator/filter';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Register } from './Register';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: any;
  durationInSeconds: number;
  staffId: any;
  successful: boolean;
  ResponseResetForm: FormGroup;
  register = new Register;
  password: any;
  errorPassword: string;


  constructor(private ngxService: NgxUiLoaderService,
    private route: ActivatedRoute, private router: Router,
    private staffService: StaffService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.token)
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.token = params.token;
        console.log(this.token); // popular
      });


    console.log(this.token);
    this.checkValidate();
  }

  public checkValidate() {
   this.staffService.checkToken( this.token, {
     password: 'password'
   }).subscribe( data => {
     this.staffId = data['staffId'];
     if ( data['message'] === 'validated') {
       this.successful = true;
       console.log('i got here');
      }
      if ( data['message'] !== 'validated') {
        this.openSnackBar();
      // tslint:disable-next-line:no-unused-expression
      this.router.navigate(['/login']);
      }
   });
  }

  public async sendPassword(registerForm: NgForm) {
    console.log(registerForm.value);
    this.ResponseResetForm = registerForm.value;
    console.log(this.ResponseResetForm['passcode']);
      if (this.ResponseResetForm['confirm'] === this.ResponseResetForm['passcode']) {
        this.password = this.ResponseResetForm['passcode']; }
        console.log('this is possible');
        this.staffService.submitPassword({
          token: this.token,
          passcode: this.password
        }).subscribe( data => {
          console.log('this is data', data);
          this.successSnackBar();
          this.router.navigate(['/login']);
        });
        if (this.ResponseResetForm['confirm'] !== this.ResponseResetForm['passcode']) {
          this.errorPassword = 'Passwords do not match, try again';
          registerForm.resetForm();
          this.ResponseResetForm = registerForm.value;
        }
  }


  openSnackBar() {
    this._snackBar.open('Token expired or invalid', 'Failed', {
      duration: this.durationInSeconds * 1000
    });
  }

  successSnackBar() {
    this._snackBar.open('Successfully reset Password', 'Success', {
      duration: this.durationInSeconds * 2000
    });
  }


}
