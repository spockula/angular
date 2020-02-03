import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../services/login.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  staff: any;
  profileDetails: any;
  image = 'assets/images/avatar.png';
  staffEmail: string;


  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, public popoverController: PopoverController,
    private nativeStorage: NativeStorage, private loginService: LoginService,
    public loadingController: LoadingController, private staffService: StaffService) { }

  user = 'user';
  userData: any;


  ngOnInit() {

    this.nativeStorage.getItem('user')
    .then(
      data => {
        this.loginService.userData = data;
        this.userData = JSON.stringify(data);
        if (data.loginData) {
          this.user = data.loginData.email;
          this.router.navigate(['dashboard']);
          this.staffEmail = this.user;
    this.getStaffDetails(this.staffEmail);
        }
      },
      error => {
        console.error(error);
        this.userData = error;
        this.router.navigate(['login']);
      }
    );
  }

  public async getStaffDetails(staffEmail) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.staffService.getStaffByEmail(staffEmail).subscribe((data: Array<object>) => {
      this.staff = data['data'][0];
      this.image = this.staff.profile_pix_url;

      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }


  goToProfile() {
         this.router.navigate(['company-profile']);
        }


  logout() {
    this.nativeStorage.remove('user').then((resp) => {
    }).catch(() => {

    });
    this.router.navigate(['/login']);
  }

  goToLeave() {
    this.router.navigate(['leave-tracker']);
  }

  goToCheckin() {
    this.router.navigate(['check']);
  }

  goToApprove() {
    this.router.navigate(['approvals']);
  }

  goToPolicy() {
    this.router.navigate(['policy']);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
