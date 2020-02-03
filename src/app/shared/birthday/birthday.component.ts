import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LoadingController } from '@ionic/angular';
import { StaffService } from './../../services/staff.service';
import { Router } from '@angular/router';
import { BirthdayService } from 'src/app/services/birthday.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
})
export class BirthdayComponent implements OnInit {

  birthdays: Array<object> = [];
  selectedBirthdays: Array<object> = [];

  constructor(private socialSharing: SocialSharing,
    private birthdayService: BirthdayService,
    private staffService: StaffService,
    private router: Router,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.getAllBirthdays();
  }



  shareViaEmail(selected_birthday) {
    // Share via email
    this.socialSharing.shareViaEmail('Happy Birthday - ' + selected_birthday.staff_name,
    'Birthday Wishes for ' + selected_birthday.staff_name, [selected_birthday.email]).then((resp) => {
      // console.log(resp);
      // Success!
    }).catch((error) => {
      // console.log(error);
      // Error!
    });
  }

  public async getAllBirthdays() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.birthdayService.getBirthdays().subscribe((data: Array<object>) => {
      this.birthdays = data['data'];
      for (let count = 0; count < 2; count++) {
        this.selectedBirthdays.push(this.birthdays[count]);
      }
      loading.dismiss();
    }, err => {
      // console.log(err);
      loading.dismiss();
    });
  }

  goToStaffDetails(staff) {
    this.staffService.selectedStaff = staff;
    this.router.navigate(['staff-details'], staff);
  }

  goToAllBirthday() {
    this.router.navigate(['all-birthdays']);
  }

  goToAllAnniversary() {
    this.router.navigate(['all-anniversaries']);
  }

}
