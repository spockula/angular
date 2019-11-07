import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../services/login.service';
import { User } from './User';


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

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/cmrDashboard';
  }

    cmrLogin(user) {
      this.user.email = user.value.email;
      this.user.passcode = user.value.password;
      this.loginService.adminLogin(this.user).subscribe((data: Array<object>) => {
        this.userData = data;
        console.log(data);
        if (data['errorCode'] === 200) {
          const _data = data['message'];

          console.log(_data);
          localStorage.setItem('cu', JSON.stringify(_data));
          this.router.navigate([this.returnUrl]);
        }
      });
    }

  }
