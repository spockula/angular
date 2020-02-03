import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OpMDModule } from "./../op-md/op-md.module";


import { IonicModule } from '@ionic/angular';

import { TermsConditionPage } from './terms-condition.page';

const routes: Routes = [
  {
    path: '',
    component: TermsConditionPage
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
  declarations: [TermsConditionPage]
})
export class TermsConditionPageModule {}
