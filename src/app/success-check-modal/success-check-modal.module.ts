import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuccessCheckModalPage } from './success-check-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessCheckModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuccessCheckModalPage]
})
export class SuccessCheckModalPageModule {}
