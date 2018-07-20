import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-orderreceipt',
  templateUrl: 'orderreceipt.html',
})
export class OrderreceiptPage {
  subTotal: number = 118.00;
  total: number = 0;
  discount: number = 0;
  received: number = 0;
  change: number = 0;
  status: string = "UnPaid";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderreceiptPage');
  }

  //Function calculate Total
  calcTotal() {
    if (this.subTotal > 0) {
      var total = this.subTotal - this.discount;
      this.total = total;
    }
  }

  //Function calculate Change
  calcChange() {
    if (this.received > 0) {
      var change = this.received - this.total;
      this.change = change;
    }
    if(this.received >= this.total)
    {
      this.status = "Paid";
    }
  }

}
