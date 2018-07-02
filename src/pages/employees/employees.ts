import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Configuration } from '../../app/BL/Configuraion';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  url: string = "";
  token: string = "";

  submitAttempt: boolean = false;
  //employees: string = "0";
  listEmployees: Employee[] = [];
  selectedEmployee: Employee = null;


  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _configuration: Configuration, private http: HttpClient
    , public toastCtrl: ToastController) {

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;
    if (_configuration.Token != null && _configuration.Token != "") {

      try {
        //Get Employees 
        this.http.get(this.url + "/GetEmployeesList",
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + this.token
            }), withCredentials: true
          }

        )
          .catch(this.handleError)

          .subscribe((res) => {
            debugger;
            var employeesList = <Employee[]>res;
            this.listEmployees = employeesList;
          }
            , (error: HttpErrorResponse) => {
              //error status == 404 that means client does not exist/save client
              if (error.status === 404) {
              }
              // else {
              //   //console.log("ErrorMsg = " + error.message);
              //   this.showToastWithCloseButton("error in loading employees " + error.message);
              // }
            }
          );
      } catch (Exception) {
        debugger;
        //Notification for Error
        this.showToastWithCloseButton("error in loading employees " + Exception.ErrorMessage);
      }
    }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EmployeesPage');
  }

  //Next
  nextClick() {
    debugger;

    //UnComment it
    if (this.selectedEmployee == null) {
      this.submitAttempt = true;
    }
    else {
      this.submitAttempt = false;
      this.navCtrl.push(TabsPage, { empID: this.selectedEmployee });
      this._configuration.SelectedEmpID = this.selectedEmployee;
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
    //this.showToastWithCloseButton("error in loading employees " + error.status + " " + error.statusText);
    const errorObject = <ErroResponse>error.error;
    this.showToastWithCloseButton("Error loading employees:" + errorObject.error_description);
    return Observable.throw(error)
  }


}
