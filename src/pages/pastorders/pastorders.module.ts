import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastordersPage } from './pastorders';

@NgModule({
  declarations: [
    PastordersPage,
  ],
  imports: [
    IonicPageModule.forChild(PastordersPage),
  ],
})
export class PastordersPageModule {}
