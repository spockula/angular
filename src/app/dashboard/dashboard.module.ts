import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { AnnouncementComponent } from '../shared/announcement/announcement.component';
import { WorkAnniversaryComponent } from '../shared/work-anniversary/work-anniversary.component';
import { BirthdayComponent } from '../shared/birthday/birthday.component';
import { DepartmentsComponent } from '../shared/departments/departments.component';
import { BranchesComponent } from '../shared/branches/branches.component';
import { NamesComponent } from '../shared/names/names.component';
import { OpMDModule } from "./../op-md/op-md.module";


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpMDModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage, AnnouncementComponent, WorkAnniversaryComponent,
    BirthdayComponent, DepartmentsComponent, BranchesComponent, NamesComponent],
    exports:[]
})
export class DashboardPageModule {}
