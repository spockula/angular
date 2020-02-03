import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaveTrackerPage } from './leave-tracker.page';
import { RequestModalPage } from '../request-modal/request-modal.page';


const routes: Routes = [
  {
    path: '',
    component: LeaveTrackerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaveTrackerPage, RequestModalPage],
  entryComponents: [RequestModalPage],
})
export class LeaveTrackerPageModule {}
