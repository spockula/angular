import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StaffService } from './../../services/staff.service';
import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from './../../services/announcement.service';
import { Announcement } from './Announcement';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {

  announcements: Array<object> = [];
  announcement = new Announcement();
  searchTerm: string;
  isDataAvail = false;
  userData: string;
  data: any;
  user: any;
  staffEmail: any;
  staff: any;
  image: any;

  constructor(private announcementService: AnnouncementService, private loginService: LoginService,
     private router: Router, private staffService: StaffService, private nativeStorage: NativeStorage,
      public loadingController: LoadingController) { }

  ngOnInit() {
    this.getStaffDetails();
  }

  public async getStaffDetails() {

    this.nativeStorage.getItem('user')
    .then(
      data => {
        this.loginService.userData = data;
        this.userData = JSON.stringify(data);
        this.data = data;
        console.log('this is data', data);
        if (data.loginData) {
          this.user = data.loginData.email;
          this.staffEmail = this.user;

      console.log('this is staffEmail', this.staffEmail);

    // tslint:disable-next-line:no-shadowed-variable
    this.staffService.getStaffByEmail(this.staffEmail).subscribe(( data: Array<object>) => {
      this.staff = data['data'][0];
      this.image = this.staff.profile_pix_url;
      console.log('this is staff', this.staff);
      this.getAllAnnouncements(this.staff.companyId);
        });
      }
    }
  );
  }


  public async getAllAnnouncements(companyId) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.announcementService.getCompanyAnnouncements(companyId).subscribe((data: Array<object>) => {
      this.announcement = data['data'][0];
      loading.dismiss();
    }, err => {
      console.log(err);
        loading.dismiss();
    });
  }

}
