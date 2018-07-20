import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { AddCustomerPage } from '../add-customer/add-customer';

@IonicPage()
@Component({
  selector: 'page-customersmodal',
  templateUrl: 'customersmodal.html',
})
export class CustomersmodalPage {
  customerName: string = "Customer 1";
  
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public viewCtrl: ViewController, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersmodalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addNewClick() {
    this.navCtrl.push(AddCustomerPage);
  }

  //on item click publish event and close modal
  itemClick(customer:string)
  {
    this.events.publish("setCustomer", customer);
    this.viewCtrl.dismiss();
  }

}
