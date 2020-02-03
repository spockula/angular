import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../services/login.service';
import { User } from './User';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cmr-login',
  templateUrl: './cmr-login.component.html',
  styleUrls: ['./cmr-login.component.css']
})
export class CmrLoginComponent implements OnInit {
  currentUser: Object;
  returnUrl: string;
  userData: Array<object> = [];
  user = new User();
  form: FormGroup;
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService,
    fb: FormBuilder) {  this.form = fb.group({
      'email': this.email,
      'password': this.password
  }); }

  ngOnInit() {
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/cmrDashboard';
  }

    cmrLogin(form) {
      form = this.form;
      console.log('this is form', form.value);
      this.user.email = form.value.email;
      this.user.passcode = form.value.password;
      this.loginService.adminLogin(this.user).subscribe((data: Array<object>) => {
        this.userData = data;
        console.log(data);
        if (data['errorCode'] === 200) {
          const _data = data['message'];
          console.log(_data);
          localStorage.setItem('cu', JSON.stringify(_data));
          this.router.navigate([this.returnUrl]);
        }
      }, err => {
        console.log('this is error', err['error']['message']);
        alert(err['error']['message']);
        this.form.reset();
      });
    }

  }
