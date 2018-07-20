import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientInfoPage } from '../client-info/client-info';
import { PastpurchasesPage } from '../pastpurchases/pastpurchases';
import { ClientNotesPage } from '../client-notes/client-notes';
import { ClientID } from '../../app/BL/ClientID';
//import { ClientPurchases } from '../../app/BL/ClientPurchases';

@IonicPage()
@Component({
  selector: 'page-serving',
  templateUrl: 'serving.html',
})
export class ServingPage {

  tab1Root = ClientInfoPage;
  tab2Root = PastpurchasesPage;
  tab3Root = ClientNotesPage;

   clientBasicInfo: ClientID = null;
  // listPurchases: ClientPurchases[];

  paramClientBasicInfo = { clientBasicInfo: ClientID };
  paramListPurchases = {listPurchases: [] };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    debugger;
    var paramVal = navParams.get('clientInfo');
    if (paramVal != undefined && paramVal != null) {
      this.paramClientBasicInfo.clientBasicInfo = paramVal;
      this.clientBasicInfo = paramVal;
      this.paramListPurchases.listPurchases = this.clientBasicInfo.Purchases;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServingPage');
  }

}
