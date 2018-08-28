import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Events, ModalController } from 'ionic-angular';
// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { MenuController } from 'ionic-angular';
import { AddNewOrderPage } from '../add-new-order/add-new-order';
import { SearchPage } from '../search/search';
import { CustomersmodalPage } from '../customersmodal/customersmodal';
import { CustomersPage } from '../customers/customers';
import { CategoriesPage } from '../categories/categories';
import { PastordersPage } from '../pastorders/pastorders';

@IonicPage()
@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})
export class ShoppingPage {
  @ViewChild(Tabs) tabs: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public menuCtrl: MenuController, public events: Events, public modalCtrl: ModalController) {
    debugger;
    //this.navCtrl.name= ContactPage;
    //this.tabs.select(tab);

    //this.events.publish('sel-tab', 1);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ShoppingPage');
  }

  ionViewDidEnter() {

  }

  scanClick() {

  }

  browseClick() {

  }

  searchClick() {

  }

  btnNewSaleClick() {
     this.navCtrl.push(AddNewOrderPage);
  }
  btnProductsClick()
  {
    this.navCtrl.push(CategoriesPage);
  }
  btnPastOrdersClick()
  {
    this.navCtrl.push(PastordersPage);
  }
  btnCustomersClick()
  {
    this.navCtrl.push(CustomersPage);
  }



  addNew() {
    this.navCtrl.push(AddNewOrderPage);
  }


  openModalSearch(characterNum) {

    let modal = this.modalCtrl.create(SearchPage, characterNum);
    modal.present();
  }

  openModalCustomers() {
    debugger;
    let modal = this.modalCtrl.create(CustomersmodalPage);
    modal.present();
  }

}
