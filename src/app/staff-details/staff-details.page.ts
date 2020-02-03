import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { LoadingController } from '@ionic/angular';
import { BranchService } from '../services/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.page.html',
  styleUrls: ['./staff-details.page.scss'],
})
export class StaffDetailsPage implements OnInit {
  staff: any;
  staffBranchDetails: any;
  branch: any;

  // tslint:disable-next-line:max-line-length
  constructor(private staffService: StaffService, private imagePicker: ImagePicker, public loadingController: LoadingController, private branchService: BranchService, private router: Router) { }

  ngOnInit() {
    this.staff = this.staffService.selectedStaff;
    this.getBranchStaffDetails(this.branch);
  }

  getProfilePix() {
    const options = {
      maximumImagesCount: 1
    };

    this.imagePicker.getPictures(options).then((results) => {
      for (let i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => {
    });

  }


  public async getStaffDetails(staffEmail) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.staffService.getStaffByEmail(staffEmail).subscribe((data: Array<object>) => {
      this.staff = data['data'][0];
      console.log('this is fir staff', data);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  public async getBranchStaffDetails(branchId) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.branchService.getBranchById(branchId).subscribe((data: Array<object>) => {
      this.branch = data['data'][0];
      console.log('i got here');
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  goToBranchDetails(staffBranchDetails) {
    this.branchService.selectedBranch = this.branch;
    this.router.navigate(['branch-details'], staffBranchDetails);
  }
}

