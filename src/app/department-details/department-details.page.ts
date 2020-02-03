import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { StaffService } from '../services/staff.service';

import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.page.html',
  styleUrls: ['./department-details.page.scss'],
})
export class DepartmentDetailsPage implements OnInit {
  dept: any;
  staff: any;

  constructor(private departmentService: DepartmentService,
    public loadingController: LoadingController,
    private staffService: StaffService,
    private router: Router) { }

  ngOnInit() {
    this.dept = this.departmentService.selectedDepartment;
    console.log('Selected Dept => ', this.departmentService.selectedDepartment);
    this.getAllDepartmentStaff(this.departmentService.selectedDepartment.departmentId);
  }


  public async getAllDepartmentStaff(deptId) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.staffService.getDepartmentStaff(deptId).subscribe((data: Array<object>) => {
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
