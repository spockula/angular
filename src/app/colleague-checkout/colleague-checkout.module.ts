import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColleagueCheckoutPage } from './colleague-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: ColleagueCheckoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColleagueCheckoutPage]
})
export class ColleagueCheckoutPageModule {}
