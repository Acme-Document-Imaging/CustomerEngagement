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
  icons: string[];
  items: Array<{ title: string, price: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        price: '1' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
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

  btnAddItemClick()
  {
    this.navCtrl.push(AddCategoryItemPage);
  }

}
