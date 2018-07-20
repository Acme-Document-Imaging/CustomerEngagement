import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TestPage } from '../pages/test/test';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ShoppingPage } from '../pages/shopping/shopping';
import { CategoriesPage } from '../pages/categories/categories';
import { CustomersPage } from '../pages/customers/customers';
import { TabsPage } from '../pages/tabs/tabs';
import { PastordersPage } from '../pages/pastorders/pastorders';
import { AddNewOrderPage } from '../pages/add-new-order/add-new-order';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  // rootPage:any = LoginPage;

  @ViewChild(Nav) nav: Nav;

  //rootPage: any = TestPage;
  rootPage: any = LoginPage;


  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'New Sale', component: AddNewOrderPage },
      { title: 'Products', component: CategoriesPage },
      { title: 'Customers', component: CustomersPage },
      { title: 'Past Orders', component: PastordersPage }
    ];

  }

  openPage(page) {
    debugger;
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component,{data:"tabShopping"});
  }

}
