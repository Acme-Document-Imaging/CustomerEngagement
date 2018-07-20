import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { EmployeesPage } from '../pages/employees/employees';
import { WaitingPage } from '../pages/waiting/waiting';
import { ServingPage } from '../pages/serving/serving';
import { ShoppingPage } from '../pages/shopping/shopping';
import { HappyPage } from '../pages/happy/happy';
import { ClientInfoPage } from '../pages/client-info/client-info';
import { PastpurchasesPage } from '../pages/pastpurchases/pastpurchases';
import { ClientNotesPage } from '../pages/client-notes/client-notes';
import { Configuration } from '../app/BL/Configuraion';
import { TestPage } from '../pages/test/test';

import { CategoriesPage } from '../pages/categories/categories';
import { CategoryItemsPage } from '../pages/category-items/category-items';
import { AddCategoryPage } from '../pages/add-category/add-category';
import { AddNewOrderPage } from '../pages/add-new-order/add-new-order';
import { OrderreceiptPage } from '../pages/orderreceipt/orderreceipt';
import { CustomersPage } from '../pages/customers/customers';
import { AddCustomerPage } from '../pages/add-customer/add-customer';
import { AddCategoryItemPage } from '../pages/add-category-item/add-category-item';
import { BrowsePage } from '../pages/browse/browse';
import { SearchPage } from '../pages/search/search';
import { CustomersmodalPage } from '../pages/customersmodal/customersmodal';
import { PastordersPage } from '../pages/pastorders/pastorders';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EmployeesPage,
    WaitingPage,
    ServingPage,
    ShoppingPage,
    HappyPage,
    ClientInfoPage,
    PastpurchasesPage,
    ClientNotesPage,
    CategoriesPage,
    CategoryItemsPage,
    AddCategoryPage,
    AddCategoryItemPage,
    AddNewOrderPage,
    OrderreceiptPage,
    CustomersPage,
    AddCustomerPage,
    BrowsePage,
    SearchPage,
    CustomersmodalPage,
    PastordersPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddCustomerPage,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    EmployeesPage,
    TabsPage,
    WaitingPage,
    ShoppingPage,
    ServingPage,
    HappyPage,
    ClientInfoPage,
    PastpurchasesPage,
    CategoriesPage,
    CategoryItemsPage,
    AddCategoryPage,
    AddCategoryItemPage,
    AddNewOrderPage,
    OrderreceiptPage,
    CustomersPage,
    BrowsePage,
    SearchPage,
    CustomersmodalPage,
    PastordersPage
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    Configuration,
    StatusBar,
    SplashScreen,
    DatePipe,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
