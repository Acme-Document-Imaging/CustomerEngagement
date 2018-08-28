import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCategoryItemPage } from '../add-category-item/add-category-item';


@IonicPage()
@Component({
  selector: 'page-category-items',
  templateUrl: 'category-items.html',
})
export class CategoryItemsPage {
  selectedItem: any;
  // icons: string[];
  items: Array<{ code: string, title: string, qty: number, price: number }>;
  descending: boolean = false;
  order: number;
  column: string = "title";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //   'american-football', 'boat', 'bluetooth', 'build'];
    this.setItems();
  }

  //set Items data
  setItems() {
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        code: '00' + i,
        title: 'Item ' + i,
        qty: (i + 2),
        price: (i + 1) * 2
        //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryItemsPage');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CategoryItemsPage, {
      item: item
    });
  }

  btnAddItemClick() {
    this.navCtrl.push(AddCategoryItemPage);
  }

  filterItems(ev: any) {
    this.setItems();

    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function (item) {
        return item.title.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

}
