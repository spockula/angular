import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffService } from './../services/staff.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: any;
  durationInSeconds: number;


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
