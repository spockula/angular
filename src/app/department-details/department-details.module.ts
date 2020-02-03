import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {  OpMDModule} from "./../op-md/op-md.module";

import { IonicModule } from '@ionic/angular';

import { DepartmentDetailsPage } from './department-details.page';

const routes: Routes = [
  {
    path: '',
    component: DepartmentDetailsPage
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
  declarations: [DepartmentDetailsPage]
})
export class DepartmentDetailsPageModule {}
