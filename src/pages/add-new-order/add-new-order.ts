import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { OrderreceiptPage } from '../../pages/orderreceipt/orderreceipt';
import { CustomersmodalPage } from '../customersmodal/customersmodal';

@IonicPage()
@Component({
  selector: 'page-add-new-order',
  templateUrl: 'add-new-order.html',
})
export class AddNewOrderPage {
  itemQuantity: number = 1;
  price: number = 10.0;
  unitPrice: number = 10.0;
  customer: string = "Ralph Burleson";

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private alertCtrl: AlertController, public modalCtrl: ModalController
    , public events: Events) {

    events.subscribe('setCustomer', (data) => {
      this.customer = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewOrderPage');
  }

  addClick() {
    this.navCtrl.pop();
  }

  scanClick() {

  }

  editQuantity(quantity: string) {
    let alert = this.alertCtrl.create({
      title: 'Edit Quantity',
      inputs: [
        {
          name: 'quantity',
          placeholder: '1.0',
          value: quantity,

        }
        // ,{
        //   name: 'password',
        //   placeholder: 'Password',
        //   type: 'password'
        // }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            this.itemQuantity = data.quantity;
            // if (User.isValid(data.username, data.password)) {
            //   // logged in!
            // } else {
            //   // invalid login
            //   return false;
            // }
          }
        }
      ]
    });
    alert.present();
  }


  increaseQuantity() {
    debugger;
    this.itemQuantity = this.itemQuantity + 1;
    var qty = this.itemQuantity
    var totalPrice = qty * this.unitPrice;
    this.price = totalPrice;
  }

  decreaseQuantity() {
    debugger;
    if (this.itemQuantity > 1) {
      this.itemQuantity = this.itemQuantity - 1;
      if (this.itemQuantity >= 1) {
        var qty = this.itemQuantity;
        var totalPrice = qty * this.unitPrice;
        this.price = totalPrice;
      }
      else
      {
        this.price = this.unitPrice;
      }
    }

  }


  btnCheckoutClick() {
    this.navCtrl.push(OrderreceiptPage);
  }

  btnAddCustomerClick() {
    debugger;
    let modal = this.modalCtrl.create(CustomersmodalPage);
    modal.present();
  }
}
