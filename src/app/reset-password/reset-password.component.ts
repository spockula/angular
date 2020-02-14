import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffService } from './../services/staff.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: string;
  durationInSeconds: number;


  constructor(private ngxService: NgxUiLoaderService,
    private route: ActivatedRoute, private router: Router,
    private staffService: StaffService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token);
    this.checkValidate();
  }

  public checkValidate() {
   this.staffService.checkToken(this.token, {
     password: 'password'
   }).subscribe( data => {
     if ( data['message'] === 'validated') {
       // tslint:disable-next-line:no-unused-expression
       this.router.navigate['/update'];
      }
      this.openSnackBar();
      // tslint:disable-next-line:no-unused-expression
      this.router.navigate['/login'];
   });
  }


  openSnackBar() {
    this._snackBar.open('Token expired or invalid', 'Failed', {
      duration: this.durationInSeconds * 1000
    });
  }


}
