import { DepartmentService } from './../services/department.service';
import { BranchService } from './../services/branch.service';
import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ProfileService } from '../services/profile.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff.service';
import { LoginService } from '../services/login.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.page.html',
  styleUrls: ['./company-profile.page.scss'],
})
export class CompanyProfilePage implements OnInit {
  staff: any;
  about: any;
  updateStatus: any;
  data: any;
  imgPreview: any;
  userData: string;
  staffEmail: any;
  user: any;
  imageData: string;
  image: any;
  branch: any;
  department: any;
  hr: any;
  line: any;
  lineManager: any;

  constructor(private nativeStorage: NativeStorage, private profileService: ProfileService,
    // tslint:disable-next-line:max-line-length
    public loadingController: LoadingController, private camera: Camera, public toastCtrl: ToastController, private branchService: BranchService,
    private router: Router, private staffService: StaffService, private departmentService: DepartmentService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.getStaffDetails();
  }

  public async getStaffDetails() {

    this.nativeStorage.getItem('user')
    .then(
      async data => {
        this.loginService.userData = data;
        this.userData = JSON.stringify(data);
        this.data = data;
        console.log('this is data', data);
        if (data.loginData) {
          this.user = data.loginData.email;
          this.staffEmail = this.user;
          const loading = await this.loadingController.create({
            message: 'Loading'
          });
          await loading.present();
    // tslint:disable-next-line:no-shadowed-variable
    this.staffService.getStaffByEmail(this.staffEmail).subscribe(( data: Array<object>) => {
      this.staff = data['data'][0];
      this.image = this.staff.profile_pix_url;
      loading.dismiss();
      this.others();
  });
    }
  },
    error => {
      console.error(error);
      this.userData = error;
       this.router.navigate(['home']);
    });
  }

  public async others() {

    this.branchService.getBranchById(this.staff.branchId).subscribe((data: Array<object>) => {
      this.branch = data['data'][0];
    });

    this.departmentService.getDepartmentById(this.staff.departmentId).subscribe((data: Array<object>) => {
      this.department = data['data'][0];
      console.log('this is dept', this.department);
    });

    this.staffService.getStaffId(this.staff.hr_id, this.staff.companyId).subscribe((data: Array<object>) => {
      this.hr = data['data'][0];
    });

    this.staffService.getStaffId(this.staff.line_manager_id, this.staff.companyId).subscribe((data: Array<object>) => {
      this.line = data['data'][0];
    });

    this.staffService.getStaffId(this.staff.reporting_line_ids, this.staff.companyId).subscribe((data: Array<object>) => {
      this.lineManager = data['data'][0];
    });

  }

  public async updateStaff() {

    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.profileService.updateStaffAbout(this.staff.email, this.about).subscribe((updateData: Array<object>) => {
      this.updateStatus = updateData;
      this.staff.about = updateData['message']['about'];
      this.about = updateData['message']['about'];
      loading.dismiss();
    }, err => {
      this.updateStatus = err;
      console.log(err);
        loading.dismiss();
    });


  }


  public async choosePhoto() {
    const options: CameraOptions = {
      quality: 40,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 100,
        targetHeight: 200
    };
    await this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     // alert(imageData)
     this.imageData = 'data:image/jpeg;base64,' + imageData;
     this.uploadPhoto();
    }, (err) => {
     // Handle error
     alert('error ' + JSON.stringify(err));
    }
    );
  }

  public async uploadPhoto() {
      const loading = await this.loadingController.create({
        message: 'Uploading Image and setting profile picture...',
        spinner: 'dots',
        translucent: true
      });
      await loading.present();
      this.profileService.updateStaffProfile(this.staff.email, this.imageData).subscribe(data => {
       this.image = this.staff.profile_pix_url;
       loading.dismiss();
       this.getStaffDetails();
      },  error => {
        loading.dismiss();
        this.showToast();
      });
  }

  async showToast() {
    const toast = this.toastCtrl.create({
      message: 'We are so sorry! this is our fault, Check-In Failed. send us a message to resolve this ',
      duration: 3000,
      position: 'middle'
    });

    (await toast).present();
  }

  doRefresh(event) {
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }


}
