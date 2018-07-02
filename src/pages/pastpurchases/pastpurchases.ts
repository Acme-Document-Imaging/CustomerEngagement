import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ClientPurchases } from '../../app/BL/ClientPurchases';

@IonicPage()
@Component({
  selector: 'page-pastpurchases',
  templateUrl: 'pastpurchases.html',
})
export class PastpurchasesPage {

  listPurchases: ClientPurchases[];
  index: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    debugger;
    //load data through Parameter
    var paramVal = navParams.get('listPurchases');
    if (paramVal != undefined && paramVal != null) {
      this.listPurchases = paramVal;
    }

    //load data through event
    events.subscribe("showClientPurchases", (purchases) => {
      debugger;
      console.log("event subscribed for purchases");
      this.listPurchases = purchases;
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastpurchasesPage');
  }

}
