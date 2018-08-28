import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public platform: Platform, public viewCtrl: ViewController) {

    //var navParameter = navParams.get('charNum');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
