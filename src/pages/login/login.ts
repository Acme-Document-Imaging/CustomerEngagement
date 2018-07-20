import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeesPage } from '../employees/employees';
import { Configuration } from '../../app/BL/Configuraion';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  submitAttempt: boolean = false;

  loginUrl: string;
  url: string;
  listEmployees: Employee[] = [];
  errorMsg: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient
    , private _configuration: Configuration, public toastCtrl: ToastController
    , public formBuilder: FormBuilder) {

    this.loginUrl = this._configuration.Url;
    this.url = _configuration.ApiUrl;

    //Create Form Using FormBuilder
    this.loginForm = formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['']
    });

  }

  ionViewDidLoad() {
    //debugger;
    //console.log('ionViewDidLoad LoginPage');
  }

  //Function Login Button Click
  loginClick() {
    debugger;
    if (!this.loginForm.valid) {
      this.submitAttempt = true;
    }

    var uName = this.loginForm.value['UserName'];
    var pass = this.loginForm.value['Password'];

    if (uName != null && uName != "") {
      this.submitAttempt = false
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('username', uName);
      urlSearchParams.append('password', pass);
      urlSearchParams.append('grant_type', 'password');
      let body = urlSearchParams.toString();

      // API Call Login
      try {
        this.http.post(this.loginUrl + "/Token",
          body,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          })
          //.catch(this.handleError)
          .subscribe(
            res => {
              //Success
              //debugger;
              const loginResponseObj = <LoginResponse>res;
              const access_token = loginResponseObj.access_token;

              //set token to configuratoin
              this._configuration.Token = loginResponseObj.access_token;

              //Clear Selected Employee or any current client from configuratoin
              this._configuration.SelectedEmpID = null;
              this._configuration.clientID = null;

              //Login success--api call to get employee list
              try {
                this.http.get(this.url + "/GetEmployeesList",
                  {
                    headers: new HttpHeaders({
                      'Content-Type': 'sapplication/x-www-form-urlencoded',
                      'Authorization': 'Bearer ' + access_token
                    }), withCredentials: true
                  }

                )
                  //.catch(this.handleErrorEmployees)
                  .subscribe((res) => {
                    //debugger;
                    var employeesList = <Employee[]>res;
                    this.listEmployees = employeesList;

                    //Redirect to Employees Page
                    this.navCtrl.push(EmployeesPage, {
                      param1: this.listEmployees, param2: this.errorMsg
                    });

                  }
                    , (error: HttpErrorResponse) => {
                      debugger;
                      //error status == 404 that means client does not exist/save client
                      if (error.status === 404) {
                        this.errorMsg = error.status + " " + error.statusText;
                        this.navCtrl.push(EmployeesPage, {
                          param1: this.listEmployees, param2: this.errorMsg
                        });
                      }
                      else {
                        this.errorMsg = error.status + " " + error.statusText;
                        this.navCtrl.push(EmployeesPage, {
                          param1: this.listEmployees, param2: this.errorMsg
                        })
                      }
                    }
                  );

              } catch (Exception) {
                //debugger;
                //Notification for Error
              }

            }
            , (error: HttpErrorResponse) => {
              debugger;
              //error status == 404 that means action does not exist
              if (error.status === 404) {
                this.errorMsg = error.status + " " + error.statusText;
                this.showToastWithCloseButton(this.errorMsg);
              }
              else {
                this.errorMsg = error.status + " " + error.statusText;
                this.showToastWithCloseButton(this.errorMsg);
              }
            }
          );
      }
      catch (Exception) {
        debugger;
        //Notification for Error
        console.log(JSON.stringify(Exception.ErrorMessage));
        this.showToastWithCloseButton("Error in login: " + Exception.ErrorMessage);
      }
    }
  }

  //handle Error Function
  public handleError = (error: HttpErrorResponse) => {
    //debugger;
    //Do messaging and error handling here
    const errorObject = <ErroResponse>error.error;
    console.log(JSON.stringify(errorObject.error_description));
    this.showToastWithCloseButton("Error in login: " + errorObject.error_description);
    return Observable.throw(error)
  }

  //handle Error GetEmployees Function
  public handleErrorEmployees = (error: HttpErrorResponse) => {
    debugger;
    // Do messaging and error handling here
    const errorObject = <ErroResponse>error.error;
    this.errorMsg = errorObject.error_description;
    console.log(JSON.stringify(errorObject.error_description));
    //Redirect to Employees Page
    this.navCtrl.push(EmployeesPage, {
      param1: this.listEmployees, param2: this.errorMsg
    });
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
