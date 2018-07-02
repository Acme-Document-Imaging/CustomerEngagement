import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Configuration } from '../../app/BL/Configuraion';
import { ClientID } from '../../app/BL/ClientID';
import { ClientInfoPage } from '../client-info/client-info';
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

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public _configuration: Configuration, public events: Events
    , private http: HttpClient, public toastCtrl: ToastController
    , public datepipe: DatePipe) {

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;

    if (_configuration.Token != null && _configuration.Token != "") {

      //API Call Get Clients for Queue
      try {
        this.http.get(this.url + "/GetQueueCustomer",
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + this.token
            }), withCredentials: true
          }
        )
          .catch(this.handleError)
          .subscribe((res) => {
            //success
            debugger;
            this.listClients = <ClientID[]>res;
          }
            , (error: HttpErrorResponse) => {
              //error status == 404 that means client does not exist/save client
              if (error.status === 404) {
              }
              else {
                //console.log("ErrorMsg = " + error.message);
                //this.showToastWithCloseButton("Error in Queue " + error.message);
              }
            }
          );
      }
      catch (Exception) {
        debugger;
        //Notification for Error
        //this.ErrorMessage = Exception.ErrorMessage;
        this.showToastWithCloseButton("Error in Queue " + Exception.ErrorMessage);
      }


    }
  }

  ionViewDidLoad() {
    debugger;
    //console.log('ionViewDidLoad QueuePage');
  }

  //Function Remove item on selection
  assignEmpNRemove(client) {
    this.clientStore = client;
    let index = this.listClients.indexOf(client);
    if (index > -1) {
      this.listClients.splice(index, 1);
    }

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


  // selectTabSelectClient(index: number, clientSelect: any) {
  //   //debugger;
  //   this.events.publish('change-tab', index, clientSelect);
  // }


  //**//Function assign Employee to selected client
  assignEmployee(client: ClientID) {
    //debugger;
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
        .catch(this.handleErrorAssign)
        .subscribe((res) => {
          debugger;
          //Returned client set to Configuration
          this.outClientSelect = <ClientID>res;
          this._configuration.clientID = this.outClientSelect;

          //call select next(Serving) tab
          this.selectTab(2);

          this.events.publish("showClientBasicInfo", this.outClientSelect);
          this.events.publish("showClientPurchases", this.outClientSelect.Purchases);

          //then select 3rd tab
        }
          , (error: HttpErrorResponse) => {
            //error status == 404 that means client does not exist/save client
            if (error.status === 404) {
            }
            else {
              //console.log("ErrorMsg = " + error.message);
              //this.showToastWithCloseButton("Error in Assign " + error.message);
            }
          }
        );
    }
    catch (Exception) {
      debugger;
      //Notification for Error
      //this.ErrorMessage = Exception.ErrorMessage;
      this.showToastWithCloseButton("Error in Assign " + Exception.ErrorMessage);
    }

  }

  //handle Error Function
  public handleError = (error: HttpErrorResponse) => {
    // Do messaging and error handling here
    debugger;
    const errorObject = <ErroResponse>error.error;
    this.showToastWithCloseButton("Error loading Waiting Queue:" + errorObject.error_description);
    return Observable.throw(error)
  }

  //Function remove item from list 
  itemRemove(client)
  {
    let index = this.listClients.indexOf(client);
    if (index > -1) {
      this.listClients.splice(index, 1);
    }
  }


  //handle Error Function (Employee Assignment)
  public handleErrorAssign = (error: HttpErrorResponse) => {
    // Do messaging and error handling here
    debugger;
    //this.showToastWithCloseButton("Error in Assign " + error.status + " " + error.statusText);
    const errorObject = <ErroResponse>error.error;
    this.showToastWithCloseButton("Error Assigning Employee:" + errorObject.error_description);
    return Observable.throw(error)
  }

  //Toast Notification with Close Button
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

