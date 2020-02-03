import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DepartmentService } from '../../services/department.service';
import { Department } from './Department';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {

  departments: Array<object> = [];
  companies: Array<object> = [];
  department = new Department();

  constructor(private departmentService: DepartmentService,
    private router: Router, public loadingController: LoadingController, private loginService: LoginService) { }

  ngOnInit() {
    this.getDepartments();
  }

  public async getDepartments() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.departmentService.getDepartments().subscribe((data: Array<object>) => {
      this.departments = data['data'];
      loading.dismiss();
    }, err => {
        loading.dismiss();
    });
  }


  public goToDepartmentDetails(dept) {
    this.departmentService.selectedDepartment = dept;
    this.router.navigate(['department-details'], dept);
  }

}
