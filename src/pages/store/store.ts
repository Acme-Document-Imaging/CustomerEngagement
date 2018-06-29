import { Component } from '@angular/core';
import { IonicPage, NavController, Events, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpParams } from '@angular/common/http';
import { Configuration } from '../../app/BL/Configuraion';
import { ClientID } from '../../app/BL/ClientID';

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  url: string = "";
  token: string = "";

  //Store Clients List
  listStoreClients: any = [];

  //Client parameter to push in list
  client: any;
  
  outClient: ClientID;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _configuration: Configuration, public events: Events, private http: HttpClient) {

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;


    this.client = navParams.get('clientStore');
    if (this.client != null) {
      this.listStoreClients.push(this.client);

    }
    console.log("store first client = " + this.client);


    debugger;
    events.subscribe('change-tab', (tab, client) => {
      this.client = client;
      debugger;
      this.listStoreClients.push(client);
    });

  }

  ionViewDidLoad() {
    debugger;
    //console.log('ionViewDidLoad StorePage');
  }

  //make next tab selected
  selectTab(index: number, client: ClientID) {
    this.events.publish('change-tab', index, client);
  }

  showClient() {
    this.selectTab(2, this.outClient);
  }

  // //assign Client to Employee and select 3rd tab
  // assignEmployee(client: ClientID) {
  //   debugger;
  //   //post request to assign 

  //   var thisemployeeAssignDTO = { "EmpId": this._configuration.SelectedEmpID, "QueueId": client.QueueId };

  //   var httpParams = new HttpParams()
  //     .append("EmpId", this._configuration.SelectedEmpID)
  //     .append("QueueId", client.QueueId)

  //   this.http.post(this.url + "/EmployeeAssignment"
  //     // {
  //     //   "EmpId": this._configuration.SelectedEmp.EmployeeId,
  //     //   "QueueId": client.QueueId
  //     // }
  //     //thisemployeeAssignDTO,
  //     , this._configuration.SelectedEmpID,
  //     //httpParams,

  //     {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         'Authorization': 'Bearer ' + this.token
  //       })
  //       , params: httpParams
  //       , withCredentials: true
  //     },


  //   )
  //     .subscribe((res) => {
  //       debugger;
  //       this.outClient = <ClientID>res;
  //       this._configuration.clientID = this.outClient;
  //       this.selectTab(2, this.outClient);
  //       //then select 3rd tab
  //     }
  //       , (error: HttpErrorResponse) => {
  //         //error status == 404 that means client does not exist/save client
  //         if (error.status === 404) {
  //         }
  //         else {
  //           console.log("ErrorMsg = " + error.message);
  //         }
  //       }
  //     );
  // }

}
