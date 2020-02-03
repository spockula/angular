import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { LeaveService } from '../services/leave.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { LoadingController } from '@ionic/angular';
import { BranchService } from '../services/branch.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../services/login.service';
import { ModalController } from '@ionic/angular';
import { RequestModalPage } from '../request-modal/request-modal.page';

@Component({
  selector: 'app-leave-tracker',
  templateUrl: './leave-tracker.page.html',
  styleUrls: ['./leave-tracker.page.scss'],
})
export class LeaveTrackerPage implements OnInit {
  staff: any;
  imgPreview: any;
  staffEmail: any;
  holiday: any;
  requests: any;
  balance: any;
  HolidayDate: any;
  pending: any;
  staffId: any;
  image: 'assets/images/avatar.png';
  leave: any;
  // tslint:disable-next-line:max-line-length
  constructor(private staffService: StaffService,  private loginService: LoginService,
  private nativeStorage: NativeStorage, private imagePicker: ImagePicker,
  public loadingController: LoadingController, private branchService: BranchService,
  private router: Router, private modalController: ModalController, private leaveService: LeaveService, /* private file: File*/) { }

  user = 'user';
  userData: any;

  ngOnInit() {
    // this.getProfilePix();
    this.nativeStorage.getItem('user')
    .then(
      data => {
        this.loginService.userData = data;
        this.userData = JSON.stringify(data);
        console.log('this is data', data);
        if (data.loginData) {
          this.user = data.loginData.email;
          this.staffEmail = this.user;
    this.getStaffDetails(this.staffEmail);
    this.getBalance();
    this.getHolidays();
        }
      }
    );
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: RequestModalPage
    });
    return await modal.present();
  }

  public async getHolidays() {
    this.leaveService.getHoliday().subscribe((data: Array<object>) => {
      const newData = data['response']['holidays'];
      this.holiday = newData.map(el => el.name );
    }, err => {
      console.log(err);
    });
  }

  public async getStaffDetails(staffEmail) {
    this.staffService.getStaffByEmail(staffEmail).subscribe((data: Array<object>) => {
      this.staff = data['data'][0];
      this.image = this.staff.profile_pix_url;
    }, err => {
      console.log(err);
    });
  }

  public async getRequests() {
    this.staffService.getStaffByEmail(this.staffEmail).subscribe((req: Array<object>) => {
      this.staff = req['data'][0];
      this.requests = this.staff.request;
          this.pending = this.staff.pending_aprovals;
  });
}

 public async getBalance() {
  this.staffService.getStaffByEmail(this.staffEmail).subscribe((bal: Array<object>) => {
    console.log('this is bal', bal);
    const balanceData = bal['data'][0]['leave']['components'];
    const balanceExtra = Object.entries(balanceData);
      this.balance = balanceExtra.map(item => {
        const key = item[0];
        const value = item[1];
        return ([key, value].join(' : ')); });
       }, error => {
         this.balance = 'Something is wrong, contact app developers';
        console.log(error);
    });
  }

  segmentChanged(ev: any) {
    if (ev._value = 'request') {
        this.requests = this.getRequests();
      } else if (ev. _value = 'balance') {
        this.balance = this.getBalance();
      } else {
        (ev._value = 'holidays');
        this.holiday = this.getHolidays();
      }
    }

    doRefresh(event) {
      console.log('Begin async operation');

      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

}
