import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StaffService } from './../../services/staff.service';
import { AnniversaryService } from './../../services/anniversary.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from './../../services/login.service';


@Component({
  selector: 'app-work-anniversary',
  templateUrl: './work-anniversary.component.html',
  styleUrls: ['./work-anniversary.component.scss'],
})
export class WorkAnniversaryComponent implements OnInit {

  anniversaries: Array<object> = [];
  selectedAnn: Array<object> = [];
  staff: any;
  staffDetails: any;
  staffEmail: any;
  anni: any;
  userData: string;
  user: any;

  constructor(private socialSharing: SocialSharing,
    private anniversaryService: AnniversaryService, private router: Router, private staffService: StaffService,
    private nativeStorage: NativeStorage, private loginService: LoginService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.getAllAnniversaries();
  }

  shareViaEmail(work_anniversary) {
    // Share via email
    this.socialSharing.shareViaEmail('Happy Work Anniversary - ' + work_anniversary.staff_name,
      'Work Anniversary Wishes for ' + work_anniversary.staff_name, [work_anniversary.email]).then((resp) => {
        console.log(resp);
        // Success!
      }).catch((error) => {
        console.log(error);
        // Error!
      });
  }


  public async getAllAnniversaries() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.anniversaryService.getAnniversaries().subscribe((data: Array<object>) => {
      this.anniversaries = data['data'];
      console.log(this.anniversaries);
      for (let count = 0; count < 2; count++) {
        this.selectedAnn.push(this.anniversaries[count]);
      }
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  public async getStaffDetails(staffEmail) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.staffService.getStaffByEmail(staffEmail).subscribe((data: Array<object>) => {
      this.staff = data['data'][0];
      console.log(data);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  getStaff(ann) {
    console.log('lekwa ya', ann);
    this.staffService.selectedStaff = ann;
    this.router.navigate(['staff-details'], ann);
    }
}

