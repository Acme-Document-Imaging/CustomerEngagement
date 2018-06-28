import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Configuration } from '../../app/BL/Configuraion';
import { ClientID } from '../../app/BL/ClientID';

@IonicPage()
@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
})
export class QueuePage {

  clientStore: any;

  url: string = "";
  token: string = "";

  listClients: ClientID[];
  outClientSelect: ClientID;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _configuration: Configuration, public events: Events
    , private http: HttpClient) {

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;

    if (_configuration.Token != null && _configuration.Token != "") {
      //Get Employees 

      this.http.get(this.url + "/GetQueueCustomer",
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.token
          }), withCredentials: true
        }

      )
        .subscribe((res) => {
          //debugger;
          this.listClients = <ClientID[]>res;
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

  ionViewDidLoad() {
    //console.log('ionViewDidLoad QueuePage');
  }

  //Function Remove item on selection
  assignEmpNRemove(client) {
    this.clientStore = client;
    let index = this.listClients.indexOf(client);
    if (index > -1) {
      this.listClients.splice(index, 1);
    }

    //debugger;

    // this.selectTab(1);

    //call assign Employee
    this.assignEmployee(client);
    //select next tab

  }

  //Function make next tab selected
  // selectTab(index: number, client: any) {
  selectTab(index: number) {
    //debugger;
    this.events.publish('change-tab', index, this.clientStore);
  }


  selectTabSelectClient(index: number, clientSelect: any) {
    //debugger;
    this.events.publish('change-tab', index, clientSelect);
  }


  //Function assign Employee to selected client
  assignEmployee(client: ClientID) {
    //debugger;
    //post request to assign 

   // var thisemployeeAssignDTO = { "EmpId": this._configuration.SelectedEmpID, "QueueId": client.QueueId };


    var httpParams = new HttpParams()
      .append("EmpId", this._configuration.SelectedEmpID)
      .append("QueueId", client.QueueId)

    this.http.post(this.url + "/EmployeeAssignment"
      // {
      //   "EmpId": this._configuration.SelectedEmp.EmployeeId,
      //   "QueueId": client.QueueId
      // }
      //thisemployeeAssignDTO,
      , this._configuration.SelectedEmpID,
      //httpParams,

      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + this.token
        })
        , params: httpParams
        , withCredentials: true
      },


    )
      .subscribe((res) => {
        //debugger;
        //this.outClientSelect = <ClientID>res;
        this._configuration.clientID = <ClientID>res;

        this.selectTab(1);


        //this.selectTabSelectClient(2,  this._configuration.clientID);
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
