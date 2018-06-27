import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SelectClientPage } from '../select-client/select-client';
import { HomePage } from '../home/home';
import { QueuePage } from '../queue/queue';
import { NavParams, Tabs, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StorePage } from '../store/store';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;
  //// tab1Root = HomePage;
  tab1Root = QueuePage;
  tab2Root = StorePage;
  tab3Root = SelectClientPage;

  // tab4Root = HomePage;
  // tab5Root = AboutPage;
  // tab6Root = ContactPage;

  storeListParam = { client: null };

  //selectedEmp:string = "";

  constructor(public params: NavParams, public events: Events) {

    //this.selectedEmp = params.get('empID');


    events.subscribe('change-tab', (tab, data) => {
      this.storeListParam.client = data;
      this.tabs.select(tab);
    });
  }
}
