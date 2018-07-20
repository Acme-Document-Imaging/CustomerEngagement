import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewOrderPage } from './add-new-order';

@NgModule({
  declarations: [
    AddNewOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewOrderPage),
  ],
})
export class AddNewOrderPageModule {}
