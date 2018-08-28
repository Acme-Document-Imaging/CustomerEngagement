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
  searchQuery: string;
  //icons: string[];
  totalItems: number;
  totalBill: number;

  customer: string = "Ralph Burleson";
  items: Array<{ code: string, title: string, price: number }>;

  orderDetailItems: Array<{ itemCode: string, itemName: string, qty: number, price: number, unitprice: number }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private alertCtrl: AlertController, public modalCtrl: ModalController
    , public events: Events) {

    events.subscribe('setCustomer', (data) => {
      this.customer = data;
    });

    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //   'american-football', 'boat', 'bluetooth', 'build'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewOrderPage');
  }

  addClick() {
    this.navCtrl.pop();
  }

  //Load item by scanning
  scanClick() {
    //TODO: Add scan functionality
  }

  btnCheckoutClick() {
    this.navCtrl.push(OrderreceiptPage);
  }

  //Add customer to order
  btnAddCustomerClick() {
    debugger;
    let modal = this.modalCtrl.create(CustomersmodalPage);
    modal.present();
  }

  //Search list (items)
  searchItems(ev: any) {
    // this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.setSearchItems();
      this.items = this.items.filter(function (item) {
        return item.title.toLowerCase().includes(val.toLowerCase());
      });
    }
    else {
      this.resetSearchItems();
    }
  }

  //set Items data (hardcoded should be loaded dynamically)
  setSearchItems() {
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        code: "00" + i,
        title: 'Item ' + i,
        price: 1 + i
        //icon: this.icons[Math.floor(Math.random() * this.icons.length)]

      });
    }
  }

  //Make items empty
  resetSearchItems() {
    debugger;
    this.items = [];
    this.searchQuery = '';
  }

  //select item for Order
  selectItem(i: number) {
    debugger;
    var code: string = this.items[i].code;
    let existIndex = this.orderDetailItems.findIndex(item => { return item.itemCode == code });
    if (existIndex == -1) {
      this.orderDetailItems.push({
        itemCode: this.items[i].code,
        itemName: this.items[i].title,
        qty: 1,
        price: this.items[i].price,
        unitprice: this.items[i].price
      });
      this.updatePrice(1, this.orderDetailItems[this.orderDetailItems.length - 1].unitprice, this.orderDetailItems.length - 1);
    }
    else {
      this.orderDetailItems[existIndex].qty = this.orderDetailItems[existIndex].qty + 1;
      this.updatePrice(this.orderDetailItems[existIndex].qty, this.orderDetailItems[existIndex].unitprice, existIndex);
    }
    this.resetSearchItems();
  }

  //Edit item Quantity Manually
  editQuantity(j: number, qty: number, unitprice: number) {
    debugger;
    let alert = this.alertCtrl.create({
      title: 'Edit Quantity',
      inputs: [
        {
          name: 'quantity',
          placeholder: '1.0',
          value: qty.toString(),
        }
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
            debugger;
            this.orderDetailItems[j].qty = parseFloat(data.quantity);
            this.updatePrice(this.orderDetailItems[j].qty, unitprice, j)
          }
        }
      ]
    });
    alert.present();
  }

  //increase item quantity
  increaseQuantity(j: number) {
    debugger;
    var itemQuantity = this.orderDetailItems[j].qty + 1;
    this.orderDetailItems[j].qty = itemQuantity;
    this.updatePrice(this.orderDetailItems[j].qty, this.orderDetailItems[j].unitprice, j);
  }

  //decrease item quantity
  decreaseQuantity(j: number) {
    debugger;
    if (this.orderDetailItems[j].qty > 1) {
      this.orderDetailItems[j].qty = this.orderDetailItems[j].qty - 1;
      this.updatePrice(this.orderDetailItems[j].qty, this.orderDetailItems[j].unitprice, j);
    }
  }

  //Update Price on changing Quantity
  updatePrice(qty: number, unitPrice: number, index: number) {
    debugger;
    var price = qty * unitPrice;
    this.orderDetailItems[index].price = price;
    this.totalItems = 0;
    this.totalBill = 0;

    for (var index = 0; index < this.orderDetailItems.length; index++) {
      this.totalItems += this.orderDetailItems[index].qty;
      this.totalBill += this.orderDetailItems[index].price;
    }
  }

}
