import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNewOrderPage } from '../add-new-order/add-new-order';

@IonicPage()
@Component({
  selector: 'page-pastorders',
  templateUrl: 'pastorders.html',
})
export class PastordersPage {

  fromDatePicker: any;
  toDatePicker: any;

  fromDate: String = new Date().toISOString();
  toDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  addNewClick() {
    console.log("add new receipt")
    this.navCtrl.push(AddNewOrderPage);
  }

  changeFromDate(_event) {
    // console.log('Date : ' + JSON.stringify(new Date(this.datePicker).toDateString()));
    this.fromDatePicker = this.fromDatePicker;
  }

  changeToDate(_event) {
    this.toDate = this.toDatePicker;
  }

}
