import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirthdayService } from 'src/app/services/birthday.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-all-birthdays',
  templateUrl: './all-birthdays.page.html',
  styleUrls: ['./all-birthdays.page.scss'],
})
export class AllBirthdaysPage implements OnInit {
  birthdays: Array<object> = [];

  constructor(private socialSharing: SocialSharing,
    private birthdayService: BirthdayService,
    public loadingController: LoadingController) { }


  ngOnInit() {
    this.getAllBirthdays();
  }

  shareViaEmail(selected_birthday) {
    // Share via email
    this.socialSharing.shareViaEmail('Happy Birthday - ' + selected_birthday.staff_name,
    'Birthday Wishes for ' + selected_birthday.staff_name, [selected_birthday.email]).then((resp) => {
      console.log(resp);
      // Success!
    }).catch((error) => {
      console.log(error);
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
      //alert(JSON.stringify(this.birthdays));
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

}
