import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BranchService } from '../../services/branch.service';
import { CompanyService } from '../../services/company.service';
import { StaffService } from '../../services/staff.service';
import { Staff } from './Staff';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss'],
})
export class NamesComponent implements OnInit {

  branches: Array<object> = [];
  companies: Array<object> = [];
  allStaff: Array<object> = [];
  staff = new Staff();
  genders = [{ 'gender': 'Male' }, { 'gender': 'Female' }];
  data: any;

  constructor(private branchService: BranchService, private companyService: CompanyService,
    // tslint:disable-next-line:max-line-length
    private staffService: StaffService, private router: Router, public loadingController: LoadingController, private loginService: LoginService) { }

  ngOnInit() {
    this.getBranches();
    this.getCompanies();
    this.getStaff();
  }

  public async getBranches() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.branchService.getBranches().subscribe((data: Array<object>) => {
      this.branches = data;
      console.log(data);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  public async getCompanies() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      this.companies = data;
      console.log(data);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  public async getStaff() {

    this.data = this.loginService.userData;
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.staffService.getAllStaff().subscribe((data: Array<object>) => {
      this.allStaff = data['data'];
      console.log(data);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });

    loading.dismiss();
  }

  goToStaffDetails(staff) {
    console.log(staff);
    this.staffService.selectedStaff = staff;
    this.router.navigate(['staff-details'], staff);
  }


}
