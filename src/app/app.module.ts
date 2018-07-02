import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';

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
import { StorePage } from '../pages/store/store';
import { ClientInfoPage } from '../pages/client-info/client-info';
import { PastpurchasesPage } from '../pages/pastpurchases/pastpurchases';
import { ClientNotesPage } from '../pages/client-notes/client-notes';
import { Configuration } from '../app/BL/Configuraion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WaitingPage,
    ServingPage,
    ShoppingPage,
    HappyPage,
    StorePage,
    ClientInfoPage,
    PastpurchasesPage,
    ClientNotesPage,
    EmployeesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    StorePage,
    ClientInfoPage,
    PastpurchasesPage,
    ClientNotesPage
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
