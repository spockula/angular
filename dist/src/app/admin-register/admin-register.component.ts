import { Component, OnInit } from '@angular/core';
import { Admin } from './Admin';
import { NgForm } from '@angular/forms';
import { RegisterService } from './../services/register.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  admin = new Admin();

  constructor(private ngxService: NgxUiLoaderService, private registerService: RegisterService) { }

  ngOnInit() {
  }

  public createAdmin(adminForm: NgForm) {
    this.ngxService.start();
    console.log(adminForm.value);
    this.admin = adminForm.value;
    this.registerService.createAdmin({
      email: this.admin.email,
      passcode: this.admin.passcode
    }).subscribe((response) => {
      console.log(response);
      console.log('this is new admin', response);
      this.admin = new Admin();
      console.log('this is new admin', this.admin);
      this.ngxService.stop();
    });
  }


}
