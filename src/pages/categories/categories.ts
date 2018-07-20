import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCategoryPage } from '../add-category/add-category';
import { CategoryItemsPage } from '../category-items/category-items';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  btnAddClick() {
    this.navCtrl.push(AddCategoryPage);
  }

  loadItems() {
    debugger;
    this.navCtrl.push(CategoryItemsPage);
  }

}
