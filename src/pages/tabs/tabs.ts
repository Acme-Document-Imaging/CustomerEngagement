import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SelectClientPage } from '../select-client/select-client';
import { HomePage } from '../home/home';
import { QueuePage } from '../queue/queue';
import { NavParams, Tabs, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StorePage } from '../store/store';
import { ClientID } from '../../app/BL/ClientID';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;

  tab1Root = QueuePage;
  tab2Root = StorePage;
  tab3Root = SelectClientPage;

  param = { client: null };

  //Parameter for store Client
  paramStore = { clientStore: null };

  paramSelect = { clientSelect: ClientID };


  constructor(public params: NavParams, public events: Events) {
    debugger;

    //event subscribed generated from Queue
    events.subscribe('change-tab', (tab, data) => {
      this.paramStore.clientStore = data;
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
