import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OpMDModule } from "./../op-md/op-md.module";

import { IonicModule } from '@ionic/angular';

import { StaffDetailsPage } from './staff-details.page';

const routes: Routes = [
  {
    path: '',
    component: StaffDetailsPage
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
  declarations: [StaffDetailsPage]
})
export class StaffDetailsPageModule {}
