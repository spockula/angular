import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllAniversariesPage } from './all-aniversaries.page';

const routes: Routes = [
  {
    path: '',
    component: AllAniversariesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllAniversariesPage]
})
export class AllAniversariesPageModule {}
