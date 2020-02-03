import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColleagueWelcomePage } from './colleague-welcome.page';


const routes: Routes = [
  {
    path: '',
    component: ColleagueWelcomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColleagueWelcomePage]
})
export class ColleagueWelcomePageModule {}
