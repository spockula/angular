import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatIconModule, MatMenuModule, MatListModule, MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatIconModule, MatMenuModule, MatListModule, MatExpansionModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatIconModule, MatMenuModule, MatListModule, MatExpansionModule],
})
export class OpMDModule { }
