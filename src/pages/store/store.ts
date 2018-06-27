import { Component } from '@angular/core';
import { IonicPage, NavController, Events, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Configuration } from '../../app/Configuration';
/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  listStoreClients = [];
  //listStoreClients: ClientID[];
  client: ClientID;


  url: string = "";
  token: string = "";
  outClient: ClientID;


  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _configuration: Configuration, public events: Events, private http: HttpClient) {

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;

    this.client = navParams.get('client');
    this.listStoreClients.push(this.client);


    this.client = navParams.get('client');

    console.log(this.listStoreClients)

    events.subscribe('change-tab', (tab, client) => {
      console.log("beforepush" + client);
      this.client = client;
      this.listStoreClients.push(client);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

  //make next tab selected
  selectTab(index: number, client: ClientID) {
    this.events.publish('change-tab', 1, client);
  }

  //assign Client to Employee and select 3rd tab
  assignEmployee(client: ClientID) {
    //post request to assign 
    console.log("assignEmp emp" + this._configuration.SelectedEmp);
    console.log("assignEmp Client" + client);
    console.log("assignEmp Client queueid" + client.QueueId);
    debugger;
    this.http.post(this.url + "/EmployeeAssignment",
      {
        EmpId: this._configuration.SelectedEmp,
        QueueId: client.QueueId
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + this.token
        }), withCredentials: true
      }

    )
      .subscribe((res) => {
        debugger;
        this.outClient = <ClientID>res;
        console.log("success post" + res);
        console.log("success post cast" + this.outClient);
        //then select 3rd tab
      }
        , (error: HttpErrorResponse) => {
          //error status == 404 that means client does not exist/save client
          if (error.status === 404) {
          }
          else {
            console.log("ErrorMsg = " + error.message);
          }
        }
      );
  }

}
