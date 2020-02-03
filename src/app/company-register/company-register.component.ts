import { Component, OnInit } from '@angular/core';
import { Register } from './Register';
import { NgForm } from '@angular/forms';
import { RegisterService } from './../services/register.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {

  register = new Register();
  returnUrl: string;

  constructor(private ngxService: NgxUiLoaderService, private registerService: RegisterService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/companyReg';
  }

  public registerCompany(registerForm: NgForm) {
    this.ngxService.start();
    console.log('this is data from the form', registerForm.value);
    this.register = registerForm.value;
    this.registerService.registerStaff({
      companyId: this.register.companyId,
      email: this.register.email,
      passcode: this.register.passcode,
    }).subscribe((response) => {
      console.log(response);
      console.log('this is new registration', response);
      alert('Account Activated Successfully. Please Proceed to Login.');
      if (response['errorCode'] === 200) {
        const _data = response['message'].data;
        delete _data['passcode'];
        delete _data['token'];
        delete _data['__v'];
        delete _data['_id'];
        console.log(_data); }
      this.register = new Register();
      this.router.navigate([this.returnUrl]);
      this.ngxService.stop();
    });
  }


}
