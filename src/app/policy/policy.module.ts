import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { PolicyPage } from './policy.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PolicyPage]
})
export class PolicyPageModule {}
