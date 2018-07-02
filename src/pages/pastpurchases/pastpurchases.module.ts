import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastpurchasesPage } from './pastpurchases';

@NgModule({
  declarations: [
    PastpurchasesPage,
  ],
  imports: [
    IonicPageModule.forChild(PastpurchasesPage),
  ],
})
export class PastpurchasesPageModule {}
