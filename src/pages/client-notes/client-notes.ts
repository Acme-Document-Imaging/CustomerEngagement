import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-client-notes',
  templateUrl: 'client-notes.html',
})
export class ClientNotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    debugger;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientNotesPage');
  }

}
