import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ColleagueWelcomePage } from '../colleague-welcome/colleague-welcome.page';

@Component({
  selector: 'app-colleague-modal',
  templateUrl: './colleague-modal.page.html',
  styleUrls: ['./colleague-modal.page.scss'],
})
export class ColleagueModalPage implements OnInit {

  constructor(private nativeStorage: NativeStorage,  private router: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  public sendStaffId(form) {
  const trial = this.nativeStorage.setItem('colleagueStaffEmail', form.value.staffEmail);
  console.log('this is trial', trial);
  this.openCheckinModal();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  public async openCheckinModal() {
    const modal = await this.modalController.create({
      component: ColleagueWelcomePage
    });
    return await modal.present();
  }

}
