import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  @ViewChild(Nav) nav: Nav;

   rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
  debugger;
  menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
