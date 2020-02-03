import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColleagueModalPage } from './colleague-modal.page';
import { ColleagueWelcomePage } from '../colleague-welcome/colleague-welcome.page';


const routes: Routes = [
  {
    path: '',
    component: ColleagueModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColleagueModalPage, ColleagueWelcomePage],
  entryComponents: [ColleagueWelcomePage]
})
export class ColleagueModalPageModule {}
