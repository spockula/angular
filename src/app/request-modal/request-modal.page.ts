import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StaffService } from '../services/staff.service';
import { CompanyService } from '../services/company.service';
import { LeaveService } from '../services/leave.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { LoadingController } from '@ionic/angular';
import { BranchService } from '../services/branch.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.page.html',
  styleUrls: ['./request-modal.page.scss'],
})
export class RequestModalPage implements OnInit {
  userData: string;
  leaveType: any;
  staffEmail: any;
  user: any;
  staff: any;
  staffId: any;
  companyId: any;
  HrId: string;
  lineId: string;
  image: 'assets/images/avatar.png';
  constructor(private staffService: StaffService,  private loginService: LoginService, private leaveService: LeaveService,
    private nativeStorage: NativeStorage, /*private transfer: FileTransfer,*/ private imagePicker: ImagePicker,
    private companyService: CompanyService,
    public toastCtrl: ToastController,
    public loadingController: LoadingController, private branchService: BranchService,
    private router: Router, private modalController: ModalController, private httpClient: HttpClient, /* private file: File*/) { }

  ngOnInit() {
    this.nativeStorage.getItem('user')
    .then(
      data => {
        this.loginService.userData = data;
        this.userData = JSON.stringify(data);
        if (data.loginData) {
          this.user = data.loginData.email;
          this.staffEmail = this.user;
    this.getStaffDetails(this.staffEmail);
    this.getLeaveType();
  }
});

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

 public async sendPostRequest(form) {
  const loading = await this.loadingController.create({
    message: 'Loading'
  });
  await loading.present();
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'text/javascript'
  });
  this.staffService.getStaffByEmail(this.staffEmail).subscribe((data: Array<object>) => {
    this.staff = data['data'][0]; });
    this.staffId = this.staff.staffId;
    this.leaveService.postToLeave(this.staffId, form.value).subscribe(data => {
        loading.dismiss();
        this.showToast();
        this.closeModal();
       }, error => {
        loading.dismiss();
        console.log(error);
      });
  }

  public async getLeaveType() {
    this.staffService.getStaffByEmail(this.staffEmail).subscribe(data => {
      this.staff = data['data'][0];
      const balanceData = data['data'][0]['leave']['components'];
        this.leaveType = Object.keys(balanceData);
      }, err => {
        console.log(err);
      });
   }

  async showToast() {
    const toast = this.toastCtrl.create({
      message: 'Your Leave request has been sent',
      duration: 2000,
      position: 'middle'
    });

    (await toast).present();
  }

  leaveSelected(ev: any) {
    this.leaveType = this.getLeaveType();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
