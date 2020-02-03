import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StaffService } from '../services/staff.service';
import { ModalController } from '@ionic/angular';
import { PdfModalPage } from '../pdf-modal/pdf-modal.page';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.page.html',
  styleUrls: ['./policy.page.scss'],
})
export class PolicyPage implements OnInit {
  fileTransfer: any;
  openPolicy: Promise<void>;
  staff: any;
  companyId: any;
  userData: string;
  user: any;
  staffEmail: any;
  data: any;
  url: any;
  policy: any;
  finally: boolean;
  whatever: any;
  display: any;

  constructor(private staffService: StaffService, public loadingController: LoadingController,
    public modalController: ModalController,
    private nativeStorage: NativeStorage, private loginService: LoginService ) { }

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
        if (data.loginData) {
          this.user = data.loginData.email;
          this.staffEmail = this.user;
      console.log('this is staffEmail', this.staffEmail);

    // tslint:disable-next-line:no-shadowed-variable
    this.staffService.getStaffByEmail(this.staffEmail).subscribe(( data: Array<object>) => {
      this.staff = data['data'][0];
      this.companyId = this.staff.companyId;
      this.policyData(this.companyId);

      });
    }
  },
    error => {
      console.error(error);
      this.userData = error;
    });
  }
public policyData(companyId) {
  this.staffService.getPolicy(companyId).subscribe((data: Array<object>) => {
    this.policy = data['data'];
  });
}

  public async trial(policy) {
   this.display = policy.content[0];
   this.showModal(this.display);
  }


public async showModal(display) {
  this.display = display;
  const modal = await this.modalController.create({
    component: PdfModalPage,
    componentProps: {
      'policy': this.display
    }
  });
  return await modal.present();
}

}
