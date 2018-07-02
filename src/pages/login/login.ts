import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { TabsPage } from '../tabs/tabs';
import { EmployeesPage } from '../employees/employees';
import { Configuration } from '../../app/BL/Configuraion';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

import { Validators, FormBuilder, FormControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //name;

  submitAttempt: boolean = false;

  actionUrl: string;
  // Username: string = "";
  // Password: string = "";
  //StoreId: string;
  //ErrorMessage: string = "";

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient
    , private _configuration: Configuration, public toastCtrl: ToastController
    , public formBuilder: FormBuilder) {

    this.actionUrl = this._configuration.Url;


    //     //this.name = new FormControl('Dayana', Validators.required)

    this.loginForm = formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['']
    });

  }

  ionViewDidLoad() {
    debugger;
    //console.log('ionViewDidLoad LoginPage');
  }

  //Login Button Click
  loginClick() {
    debugger;
    if (!this.loginForm.valid) {
      this.submitAttempt = true;
      console.log("not valid");
      //this.signupSlider.slideTo(0);
    }

    var uName = this.loginForm.value['UserName'];
    var pass = this.loginForm.value['Password'];

    if (uName != null && uName != "") {
      this.submitAttempt = false
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('username', uName);
      urlSearchParams.append('password', '');
      urlSearchParams.append('grant_type', 'password');
      let body = urlSearchParams.toString();

      // API Call Login
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
              //Success
              debugger;
              const loginResponseObj = <LoginResponse>res;
              const access_token = loginResponseObj.access_token;

              //set token to configuratoin
              this._configuration.Token = loginResponseObj.access_token;

              //Clear Selected Employee or any current client from configuratoin
              this._configuration.SelectedEmpID = null;
              this._configuration.clientID = null;
              var UserName = loginResponseObj.userName;

              //Redirect to Employees Page
              this.navCtrl.push(EmployeesPage);
            }, error => {
              debugger
              //var errrr = <HttpErrorResponse>error;
              console.log(JSON.stringify(error));
              //var err = JSON.stringify(error)
              //this.showToastWithCloseButton("Error in login " + error.error_description);
            }

          );
      }
      catch (Exception) {
        debugger;
        //Notification for Error
        //this.ErrorMessage = Exception.ErrorMessage;
        this.showToastWithCloseButton("Error in login:" + Exception.ErrorMessage);
      }
    }
  }

  //handle Error Function
  public handleError = (error: HttpErrorResponse) => {
    // Do messaging and error handling here
    debugger;
    // Do messaging and error handling here
    const errorObject = <ErroResponse>error.error;
    this.showToastWithCloseButton("Error in login:" + errorObject.error_description);
    return Observable.throw(error)
  }

  //Toast Notification with delay (Auto close)
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Mmmm, buttered toast',
      duration: 2000,
      position: position
    });

    toast.present(toast);
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




























// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { CommonModule } from '@angular/common';
// import { TabsPage } from '../tabs/tabs';
// import { EmployeesPage } from '../employees/employees';
// import { Configuration } from '../../app/BL/Configuraion';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// // import 'rxjs/add/observable/throw';
// import { Observable } from 'rxjs/Observable';
// import { ToastController } from 'ionic-angular';

// //import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


// @IonicPage()
// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {

//   //name;


//   actionUrl: string;
//   Username: string = "";
//   Password: string = "";
//   //StoreId: string;
//   //ErrorMessage: string = "";

//   constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient
//     , private _configuration: Configuration,public toastCtrl: ToastController) {

//     this.actionUrl = this._configuration.Url;


//     //this.name = new FormControl('Dayana', Validators.required)
//   }

//   ionViewDidLoad() {
//     debugger;
//     //console.log('ionViewDidLoad LoginPage');
//   }

//   //Login Button Click
//   loginClick() {
//     if (this.Username != null && this.Username != "") {
//       let urlSearchParams = new URLSearchParams();
//       urlSearchParams.append('username', 'admin');
//       urlSearchParams.append('password', '');
//       urlSearchParams.append('grant_type', 'password');
//       let body = urlSearchParams.toString();

//       // API Call Login
//       try {
//         this.http.post(this.actionUrl + "/Token",
//           body,
//           {
//             headers: new HttpHeaders({
//               'Content-Type': 'application/x-www-form-urlencoded'
//             })
//           })
//           .catch(this.handleError)

//           .subscribe(
//             res => {
//               //Success
//               debugger;
//               const loginResponseObj = <LoginResponse>res;
//               const access_token = loginResponseObj.access_token;
//               //const userName = loginResponseObj.userName;

//               //set token to configuratoin
//               this._configuration.Token = loginResponseObj.access_token;

//               //Clear Selected Employee or any current client from configuratoin
//               this._configuration.SelectedEmpID = null;
//               this._configuration.clientID = null;
//               var UserName = loginResponseObj.userName;
//               //var IsAuthenticated = true;

//               //keep token to local storage
//               //localStorage.setItem("token", loginResponseObj.access_token);

//               //Redirect to Employees Page
//               this.navCtrl.push(EmployeesPage);
//             }, error => { console.log(JSON.stringify(error)); }

//           );

//         // if (AppDef.TOKEN == null || AppDef.TOKEN == "") {
//         //   this.ErrorMessage = "Login is not successful!";
//         // }

//       }
//       catch (Exception) {
//         debugger;
//         //Notification for Error
//         //this.ErrorMessage = Exception.ErrorMessage;
//         this.showToastWithCloseButton(Exception.ErrorMessage);
//       }
//     }
//   }

//   //handle Error Function
//   public handleError = (error: HttpErrorResponse) => {
//     // Do messaging and error handling here
//     debugger;
//     this.showToastWithCloseButton(error.message);
//     return Observable.throw(error)
//   }

//   //Toast Notification with delay (Auto close)
//   showToast(position: string) {
//     let toast = this.toastCtrl.create({
//       message: 'Mmmm, buttered toast',
//       duration: 2000,
//       position: position
//     });

//     toast.present(toast);
//   }

//   //Toast Notification with Close Button
//   showToastWithCloseButton(msg:string) {
//     const toast = this.toastCtrl.create({
//       message: msg,
//       showCloseButton: true,
//       closeButtonText: 'Ok'
//     });
//     toast.present();
//   }
// }
