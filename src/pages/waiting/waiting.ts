import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Configuration } from '../../app/BL/Configuraion';
import { ClientID } from '../../app/BL/ClientID';
// import { ClientInfoPage } from '../client-info/client-info';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { DatePipe } from '@angular/common'


@IonicPage()
@Component({
  selector: 'page-waiting',
  templateUrl: 'waiting.html',
})
export class WaitingPage {
  url: string = "";
  token: string = "";

  //QueueList
  listClients: ClientID[];

  //Client Parameter to send to store tab
  clientStore: any;

  //Client returned from Post Employee
  outClientSelect: ClientID;

  //errorMsg to show errors
  errorMsg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public _configuration: Configuration, public events: Events
    , private http: HttpClient, public toastCtrl: ToastController
    , public datepipe: DatePipe) {

    debugger;

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;

    if (_configuration.listClientsWaiting != null && _configuration.listClientsWaiting.length > 0) {
      this.listClients = _configuration.listClientsWaiting;
    }
    else if(_configuration.errorMsgWaiting != null && _configuration.errorMsgWaiting != undefined)
    {
      this.showToastWithCloseButton("Error loading Waiting Queue! " + this.errorMsg);
    }
    else
    {
      this.showToastWithCloseButton("Error loading Waiting Queue! " + this.errorMsg);
    }

    // if (this.listClients == null || this.listClients.length <= 0) {
    //   this.listClients = navParams.get("param1");
    //   this.errorMsg = navParams.get("param2");
    // }

    //var param3 = navParams.get("param3");

    //if (param3 == "" || param3 == null) {
    // if (this.listClients == null || this.listClients.length <= 0) {
    //   if (this.errorMsg != null && this.errorMsg != "" && this.errorMsg != undefined) {
    //     this.showToastWithCloseButton("Error loading Waiting Queue! " + this.errorMsg);
    //   }
    //   else {
    //     this.showToastWithCloseButton("Error loading Waiting Queue!");
    //   }
    // }
    // //}

  }

  ionViewDidLoad() {
    debugger;
    //console.log('ionViewDidLoad QueuePage');
  }

  //Function Remove item on selection
  assignEmpNRemove(client) {

    //call assign Employee
    this.assignEmployee(client);

  }

  //**//Function make next tab selected
  // selectTab(index: number, client: any) {
  selectTab(index: number) {
    debugger;
    //console.log("tab selected" + this.clientStore.lastCheckintime);
    this.events.publish('change-tab', index, this.outClientSelect);
  }

  //**//Function assign Employee to selected client
  assignEmployee(client: ClientID) {
    debugger;
    //post request to assign 
    var httpParams = new HttpParams()
      .append("EmpId", this._configuration.SelectedEmpID)
      .append("QueueId", client.QueueId)

    try {

      //API call to Assign Employee   
      this.http.post(this.url + "/EmployeeAssignment"
        , this._configuration.SelectedEmpID,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.token
          })
          , params: httpParams
          , withCredentials: true
        },
      )
        //.catch(this.handleErrorAssign)
        .subscribe((res) => {
          debugger;
          //Returned client set to Configuration
          this.outClientSelect = <ClientID>res;
          this._configuration.clientID = this.outClientSelect;

          //Remove client from list
          let index = this.listClients.indexOf(client);
          if (index > -1) {
            this.listClients.splice(index, 1);
          }

          //call select next(Serving) tab
          this.selectTab(2);

          this.events.publish("showClientBasicInfo", this.outClientSelect);
          this.events.publish("showClientPurchases", this.outClientSelect.Purchases);
        }
          , (error: HttpErrorResponse) => {
            //error status == 404 that means action does not exist
            // if (error.status === 404) {

            // }
            // else {
            //   //console.log("ErrorMsg = " + error.message);
            //   //this.showToastWithCloseButton("Error in Assign " + error.message);
            // }
            this.showToastWithCloseButton("Error while Meet! " + error.status + " " + error.statusText);
          }
        );
    }
    catch (Exception) {
      debugger;
      //Notification for Error
      //this.ErrorMessage = Exception.ErrorMessage;
      this.showToastWithCloseButton("Error while Meet! " + Exception.ErrorMessage);
    }
  }

  //Function remove item from list 
  itemRemove(client) {
    let index = this.listClients.indexOf(client);
    if (index > -1) {
      this.listClients.splice(index, 1);
    }
  }

  //Function handle Error Function (Employee Assignment)
  public handleErrorAssign = (error: HttpErrorResponse) => {
    // Do messaging and error handling here
    debugger;
    //this.showToastWithCloseButton("Error in Assign " + error.status + " " + error.statusText);
    const errorObject = <ErroResponse>error.error;
    this.showToastWithCloseButton("Error while Meet! " + errorObject.error_description);
    return Observable.throw(error)
  }

  //Function Toast Notification with Close Button
  showToastWithCloseButton(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      position: "middle",
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}

