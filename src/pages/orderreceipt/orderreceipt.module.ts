import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderreceiptPage } from './orderreceipt';

@NgModule({
  declarations: [
    OrderreceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderreceiptPage),
  ],
})
export class OrderreceiptPageModule {}
