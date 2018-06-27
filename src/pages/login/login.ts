import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { TabsPage } from '../tabs/tabs';
import { EmployeesPage } from '../employees/employees';
import { Configuration } from '../../app/Configuration';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //_configuration: Configuration;
  actionUrl: string;
  Username: string = "";
  Password: string = "";
  StoreId: string;
  ErrorMessage: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient
             ,private _configuration: Configuration) {
    this.actionUrl = this._configuration.Url;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginClick() {
    // console.log("UserName =" + this.Username);
    // console.log("Password =" + this.Password);
    // console.log("url =" + this.actionUrl);
    if (this.Username != null && this.Username != "") {
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('username', 'admin');
      urlSearchParams.append('password', '');
      urlSearchParams.append('grant_type', 'password');
      let body = urlSearchParams.toString();
      try {
        this.http.post(this.actionUrl + "/Token",
          body,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          })
          .catch(this.handleError)

          .subscribe(
            res => {
              //console.log("in post response");
              const loginResponseObj = <LoginResponse>res;
              const access_token = loginResponseObj.access_token;
              const userName = loginResponseObj.userName;
              console.log(loginResponseObj);

              this._configuration.Token = loginResponseObj.access_token;
              var UserName = loginResponseObj.userName;
              var IsAuthenticated = true;

              //keep token to local storage
              localStorage.setItem("token",loginResponseObj.access_token);
              //console.log("token is" + TOKEN);
              //console.log("user name is" + UserName);

              //Redirect to Employees Page
              this.navCtrl.push(EmployeesPage);


            }, error => { console.log(JSON.stringify(error)); }

          );

        // if (AppDef.TOKEN == null || AppDef.TOKEN == "") {
        //   this.ErrorMessage = "Login is not successful!";
        // }

      }
      catch (Exception) {
        debugger;
        this.ErrorMessage = Exception.ErrorMessage;
      }
    }



  }

  //handle Error Function
  public handleError = (error: HttpErrorResponse) => {
    // Do messaging and error handling here
    const errorObject = <ErroResponse>error.error;
    // console.log(errorObject.error_description);
    this.ErrorMessage = errorObject.error_description;
    return Observable.throw(error)
  }

}
