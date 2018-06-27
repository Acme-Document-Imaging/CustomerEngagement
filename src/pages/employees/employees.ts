import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Configuration } from '../../app/Configuration';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  url: string = "";
  token: string = "";

  //employees: string = "0";
  listEmployees: Employee[] = [];
  selectedEmployee: Employee = null;


  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _configuration: Configuration, private http: HttpClient) {

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;
    if (_configuration.Token != null && _configuration.Token != "") {

      //Get Employees 
      this.http.get(this.url + "/GetEmployeesList",
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.token
          }), withCredentials: true
        }

      )
        .subscribe((res) => {
          debugger;
          var employeesList = <Employee[]>res;

          this.listEmployees = employeesList;

          //console.log("this.emp list[0] " + this.listEmployees[0]);

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
    console.log('ionViewDidLoad EmployeesPage');
  }

  //Next
  nextClick() {
    this.navCtrl.push(TabsPage, { empID: this.selectedEmployee });
    this._configuration.SelectedEmp = this.selectedEmployee;
  }

  getSelectedValue(myselect) {
    this.selectedEmployee = myselect;
    console.log(this.selectedEmployee);
  }


}
