import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-client',
  templateUrl: 'select-client.html',
})
export class SelectClientPage {

  public client : any = {firstName: null, lastName: null, birthDate: null, address: null, state: null,
                zipCode: null, phone: null, lastPurchaseDate: null, lastVisitDate: null, lastPurchaseItem: null, tags: null  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client.firstName = "Ralph";
    this.client.lastName = "Bursolen";
    this.client.birthDate = "22-10-2011";
    this.client.address = "New york";
    this.client.state = "NV";
    this.client.zipCode = "123456";
    this.client.phone = "0332-81380";
    this.client.lastPurchaseDate = "23-06-2018";
    this.client.lastVisitDate = "23-06-2018";
    this.client.lastPurchaseItem = "Vehicle";
    this.client.tags = "Tag1, Tag2, Tag3";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectClientPage');
  }

}
