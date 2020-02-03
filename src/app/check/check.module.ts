import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckPage } from './check.page';
import { CheckModalPage } from '../check-modal/check-modal.page';
import { CheckOutModalPage } from '../check-out-modal/check-out-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CheckPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckPage, CheckModalPage, CheckOutModalPage],
  entryComponents: [CheckModalPage, CheckOutModalPage ],
})
export class CheckPageModule {}
