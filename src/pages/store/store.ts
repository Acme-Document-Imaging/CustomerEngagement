import { Component } from '@angular/core';
import { IonicPage, NavController, Events, NavParams } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  clientsStore = [];
  client: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {

    // this.client = navParams.get('client');
    // this.clientsStore.push(this.client);

    events.subscribe('change-tab', (tab, client) => {
      
      this.client = client;
      this.clientsStore.push(client);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

}
