import { Component, OnInit } from '@angular/core';
import { BranchService } from '../services/branch.service';
import { StaffService } from '../services/staff.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.page.html',
  styleUrls: ['./branch-details.page.scss'],
})
export class BranchDetailsPage implements OnInit {

  branch: any;
  staff: any;

  constructor(private branchService: BranchService, public loadingController: LoadingController,
    private staffService: StaffService,
    private router: Router) { }

  ngOnInit() {
    this.branch = this.branchService.selectedBranch;
    console.log(this.branchService.selectedBranch);
    this.getAllBranchStaff(this.branchService.selectedBranch.branchId);
  }


  public async getAllBranchStaff(branchId) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.staffService.getBranchStaff(branchId).subscribe((data: Array<object>) => {
      this.staff = data['data'];
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }


  goToStaffDetails(staff) {
    this.staffService.selectedStaff = staff;
    this.router.navigate(['staff-details'], staff);
  }

}
