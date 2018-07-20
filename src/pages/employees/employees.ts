import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Configuration } from '../../app/BL/Configuraion';
// import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { ClientID } from '../../app/BL/ClientID';


@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  url: string = "";
  token: string = "";

  submitAttempt: boolean = false;
  listEmployees: Employee[] = [];
  selectedEmployee: Employee = null;
  errorMSG: string = "";
  //QueueList
  listClients: ClientID[];

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _configuration: Configuration, private http: HttpClient
    , public toastCtrl: ToastController) {

    debugger;

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;

    // this.listEmployees = navParams.get('data');
    // this.errorMSG = navParams.get('msg');

    this.listEmployees = navParams.get('param1');
    this.errorMSG = navParams.get('param2');

    if (this.listEmployees == null || this.listEmployees.length <= 0) {
      if (this.errorMSG != null && this.errorMSG != "" && this.errorMSG != undefined) {
        this.showToastWithCloseButton("Error loading Employees! " + this.errorMSG);
      }
      else {
        this.showToastWithCloseButton("Some Error loading Employees!");
      }
    }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EmployeesPage');
  }

  //Function Next Click
  nextClick() {
    debugger;

    if (this.selectedEmployee == null) {
      this.submitAttempt = true;
    }
    else {
      //API Call to get Customers Queue
      try {
        this.http.get(this.url + "/GetQueueCustomer",
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + this.token
            }), withCredentials: true
          }
        )
          //.catch(this.handleError)
          .subscribe(
            (res) => {
              //success
              debugger;
              this.listClients = <ClientID[]>res;

              this.submitAttempt = false;
              this.navCtrl.push(TabsPage, { param1: this.listClients, param2: this.errorMSG });
              this._configuration.SelectedEmpID = this.selectedEmployee;
            }
            , (error: HttpErrorResponse) => {
              //error status == 404 that means action does not exist
              this.errorMSG = error.status + " " + error.statusText;
              this.navCtrl.push(TabsPage, { param1: this.listClients, param2: this.errorMSG });
            }
          );
      }
      catch (Exception) {
        //Notification for Error
        //this.ErrorMessage = Exception.ErrorMessage;
        //this.showToastWithCloseButton("Error in Queue " + Exception.ErrorMessage);
      }

    }

  }

  //get selected value
  getSelectedValue(myselect) {
    this.selectedEmployee = myselect;
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

  //handle Error Function
  public handleError = (error: HttpErrorResponse) => {
    // Do messaging and error handling here
    debugger;
    //const errorObject = <ErroResponse>error.error;
    //this.showToastWithCloseButton("Error loading employees:" + errorObject.error_description);
    //this.navCtrl.push(TabsPage, { listClients: this.listClients });
    return Observable.throw(error)
  }
}
