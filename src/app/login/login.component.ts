import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../services/login.service';
import { User } from './User';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser: Object;
  returnUrl: string;
  userData: Array<object> = [];
  user = new User();
  form: FormGroup;
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService,
    fb: FormBuilder) {
      this.form = fb.group({
        'email': this.email,
        'password': this.password
    });
     }

  ngOnInit() {
    if (localStorage.getItem('cu')) {
      this.currentUser = JSON.parse(localStorage.getItem('cu'));
      console.log(this.currentUser);
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  login(form) {
    form = this.form;
    this.user.email = form.value.email;
    this.user.passcode = form.value.password;
    this.loginService.doLogin(this.user).subscribe((data: Array<object>) => {
      this.userData = data;
      console.log(data);
      if (data['errorCode'] === 200) {
        const _data = data['message'].data;
        delete _data['passcode'];
        delete _data['token'];
        delete _data['__v'];
        delete _data['_id'];
        console.log(_data);
        localStorage.setItem('cu', JSON.stringify(_data));
        this.router.navigate([this.returnUrl]);
      }
    });
  }

}
