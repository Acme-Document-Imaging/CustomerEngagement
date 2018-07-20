import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCustomerPage } from '../add-customer/add-customer';

@IonicPage()
@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addNewClick()
  {
    this.navCtrl.push(AddCustomerPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
  }

}
