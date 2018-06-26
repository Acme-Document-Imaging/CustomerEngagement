import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { TabsPage } from '../tabs/tabs';
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
  actionUrl: string;
  Username: string = "";
  Password: string = "";
  StoreId: string;
  ErrorMessage: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _configuration: Configuration, private http: HttpClient
  ) {
    this.actionUrl = _configuration.Url;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginClick() {
    if ((this.Username != null && this.Username != "") && (this.Password != null && this.Password != "")) {
      //console.log("POST");
      let urlSearchParams = new URLSearchParams();

      urlSearchParams.append('username', 'admin');
      urlSearchParams.append('password', '');
      urlSearchParams.append('grant_type', 'password');
      let body = urlSearchParams.toString();
      try {
        this.http.post(this.actionUrl + "/Token",
          //JSON.stringify({ Username: this.Username, Password: this.Password, StoreId: this._configuration.store }),
          //JSON.stringify({ username: this.Username, password:this.Password,grant_type:'password'  }),
          
          body,
          {
            headers: new HttpHeaders({
              //'Content-Type': 'application/json', 'Accept': 'application/json'
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          })
          .catch(this.handleError)

          .subscribe(
            res => {
              // const loginResponseObj = <LoginResponse>res;
              console.log("in post response");
              const loginResponseObj = <LoginResponse>res;
              const access_token = loginResponseObj.access_token;
              const userName = loginResponseObj.userName;
              //console.log(myaccT);
              var TOKEN = loginResponseObj.access_token;
              var UserName = loginResponseObj.userName;
              var IsAuthenticated = true;

              //set token to cookie
              // this.cookieService.set("TOKEN", AppDef.TOKEN);
              this.navCtrl.push(TabsPage);


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
