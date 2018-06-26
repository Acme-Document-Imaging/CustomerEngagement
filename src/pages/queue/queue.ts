import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Events } from 'ionic-angular';
import { CommonModule } from '@angular/common';


/**
 * Generated class for the QueuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
})
export class QueuePage {


  clients = [
    { "name": "Name 1", "age": "30", "height": "74in", "lastCheckintime": "5" },
    { "name": "Name 2", "age": "31", "height": "73in", "lastCheckintime": "4" },
    { "name": "Name 3", "age": "32", "height": "72in", "lastCheckintime": "3" },
    { "name": "Name 3", "age": "33", "height": "71in", "lastCheckintime": "2" },
    { "name": "Name 4", "age": "34", "height": "75in", "lastCheckintime": "1" },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueuePage');
  }

  removeItem(client) {
    let index = this.clients.indexOf(client);
    if (index > -1) {
      this.clients.splice(index, 1);
    }
    this.selectTab(1,client);
  }

  selectTab(index: number, client: any) {
    this.events.publish('change-tab', 1, client);
}

}





// import { Component } from '@angular/core';
// import { NavController, Tabs, Events } from 'ionic-angular';
// import { CommonModule } from '@angular/common';
// import { AboutPage } from '../about/about'

// @Component({
//   selector: 'page-queue',
//   templateUrl: 'queue.html'
// })
// export class QueuePage {

//   clients = [
//     { "name": "Name 1", "age": "30", "height": "74in", "lastCheckintime": "5" },
//     { "name": "Name 2", "age": "31", "height": "73in", "lastCheckintime": "4" },
//     { "name": "Name 3", "age": "32", "height": "72in", "lastCheckintime": "3" },
//     { "name": "Name 3", "age": "33", "height": "71in", "lastCheckintime": "2" },
//     { "name": "Name 4", "age": "34", "height": "75in", "lastCheckintime": "1" },
//   ];

//   constructor(public navCtrl: NavController,private events: Events) { }

//   removeItem(client) {
//     let index = this.clients.indexOf(client);
//     if (index > -1) {
//       this.clients.splice(index, 1);
//     }
//     // alert("client = "+client + " index ="+ index);
//     //this.navCtrl.push(AboutPage, {client: client});
//     this.selectTab(1,client);


//   }

//   selectTab(index: number, client: any) {
//     // var t: Tabs = this.navCtrl.parent;
//     // t.select(index,client);
//     //alert("in select tab");

//     this.events.publish('change-tab', 1, client);
// }


// }
