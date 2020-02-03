import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColleagueCheckinPage } from './colleague-checkin.page';

const routes: Routes = [
  {
    path: '',
    component: ColleagueCheckinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColleagueCheckinPage]
})
export class ColleagueCheckinPageModule {}
