import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ClientInfoPage } from '../client-info/client-info';
import { HomePage } from '../home/home';
import { WaitingPage } from '../waiting/waiting';
import { ShoppingPage } from '../shopping/shopping';
import { ServingPage } from '../serving/serving';
import { HappyPage } from '../happy/happy';
import { NavParams, Tabs, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StorePage } from '../store/store';
import { ClientID } from '../../app/BL/ClientID';
import { ClientPurchases } from '../../app/BL/ClientPurchases';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;

  tab1Root = WaitingPage;
  tab2Root = ShoppingPage;
  tab3Root = ServingPage;
  tab4Root = HappyPage;

  //Parameter for Serving ( Client Info)
  paramClientInfo = { clientInfo: ClientID };
  

  paramSelect = { clientSelect: ClientID };

  constructor(public params: NavParams, public events: Events) {
    debugger;

    //event subscribed generated from Waiting
    events.subscribe('change-tab', (tab, data) => {
      this.paramClientInfo.clientInfo = data;
      this.tabs.select(tab);
    });

    // events.subscribe('selectClient', (data) => {
    //   this.paramSelect.clientSelect = data;
    // });

    events.subscribe('selectClient', (data) => {
      this.paramSelect.clientSelect = data;
      //this.tabs[2].tabTitle = data.FirstName;
    });
  }

}
