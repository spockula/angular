import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AnniversaryService } from '../services/anniversary.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-all-aniversaries',
  templateUrl: './all-aniversaries.page.html',
  styleUrls: ['./all-aniversaries.page.scss'],
})
export class AllAniversariesPage implements OnInit {
  anniversaries: Array<object> = [];

  constructor(private socialSharing: SocialSharing,
    private anniversaryService: AnniversaryService,
    public loadingController: LoadingController) { }

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
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

}
