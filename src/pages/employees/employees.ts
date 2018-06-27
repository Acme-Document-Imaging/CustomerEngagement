// //import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
// import { Configuration } from '../../app/Configuration';
// // import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

// import { Component } from '@angular/core';
// import {Http, Headers, Response} from '@angular/http';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/map';


// @IonicPage()
// @Component({
//   selector: 'page-employees',
//   templateUrl: 'employees.html',
// })
// export class EmployeesPage {
//   employees: string = "2";
//   token: string = "";
//   url: string = "";
//   employeesList : Employee [];
//   webReturn: any;


//   constructor(public navCtrl: NavController, public navParams: NavParams
//     , private _configuration: Configuration, private http: Http) {

//     this.token = _configuration.Token;
//     this.url = _configuration.ApiUrl;
//     if (_configuration.Token != null && _configuration.Token != "") {
//       console.log("token = " + this.token);
//       console.log("url = " + this.url);
//       console.log("employees inside constuctor");
//       //Get Employees 

//       console.log("token = "+this.token);

//       let headersObj = new Headers();
//     headersObj.append('Authorization', this.token);

//     console.log(this.url);
//     console.log(this.token);

//     this.http.get(this.url, {headers:headersObj})
//       .map((res:Response) => res.json())
//       .subscribe(res => {
//         this.webReturn = res;
//         console.log(this.webReturn);
//       });







//     }

//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad EmployeesPage');
//   }

//   nextClick() {
//     this.navCtrl.push(TabsPage);
//   }





// }






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
  employees: string = "2";
  token: string = "";
  url: string = "";
  employeesList: Employee[];


  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _configuration: Configuration, private http: HttpClient) {

    this.token = _configuration.Token;
    this.url = _configuration.ApiUrl;
    if (_configuration.Token != null && _configuration.Token != "") {
      console.log("token = " + this.token);
      console.log("url = " + this.url);
      console.log("employees inside constuctor");
      //Get Employees 


      const headers = new HttpHeaders()
        .set("auth-token", this.token);

      const options = {
        headers: this.createAuthorizationHeader()

      };

      console.log("token = " + this.token);


      this.http.get(this.url + "/GetEmployeesList",
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer '+ this.token
          }), withCredentials: true
        }

      )
        .subscribe((res) => {
          debugger;
          var employeesList = <Employee>res;

          console.log("emp result " + res);
          console.log("emp list " + employeesList);

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

  createAuthorizationHeader() {
    var headers = new HttpHeaders();
    // get auth token

    // append auth token to headers
    headers.append("Authorization", this.token);
    console.log("return headers = " + headers);
    return headers
  }

  nextClick() {
    this.navCtrl.push(TabsPage);
  }

}
