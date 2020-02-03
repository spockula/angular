import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TermsConditionPage } from '../terms-condition/terms-condition.page';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userData: any;

  constructor(public modalController: ModalController, private nativeStorage: NativeStorage, private router: Router) { }

  ngOnInit() {

    this.nativeStorage.getItem('user')
      .then(
        data => {
          this.userData = JSON.stringify(data);
          // if (this.userData.loginData.persist === true) {
            this.router.navigate(['dashboard']);
         // }
        },
        error => {
          // console.error(error);
          // this.userData = error;
          this.router.navigate(['home']);
        }
      );

  }

  // *********  Show Terms and Condition Dialog
  async presentTermsAndCondition() {
    const modal = await this.modalController.create({
      component: TermsConditionPage,
      showBackdrop: true
    });
    return await modal.present();
  }


}
