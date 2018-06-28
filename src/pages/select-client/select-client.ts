import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Configuration } from '../../app/BL/Configuraion';
import { ClientID } from '../../app/BL/ClientID';
import { ClientPurchases } from '../../app/BL/ClientPurchases';

// import { DatePipe } from '@angular/common';
// import { Pipe, PipeTransform } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-select-client',
  templateUrl: 'select-client.html',
})
export class SelectClientPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  client: ClientID;
  listPurchases: ClientPurchases;


  constructor(public navCtrl: NavController, public navParams: NavParams
    , public events: Events, public _configuratoin: Configuration) {
    debugger;
    this.client = new ClientID();
    this.listPurchases = new ClientPurchases();
    if (_configuratoin.clientID != undefined && _configuratoin.clientID == null) {
      this.client = _configuratoin.clientID;
      if (this.client != undefined && this.client != null) {
        this.listPurchases = _configuratoin.clientID.Purchases;

      }
    }

    // else
    // {
    //   this.resetClient();
    // }

    events.subscribe('change-tab', (tab, client) => {
      this.client = _configuratoin.clientID;
    });

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SelectClientPage');
  // }

  ionViewDidLoad() {

    // this.barChart = new Chart(this.barCanvas.nativeElement, {

    //     type: 'bar',
    //     data: {
    //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //               'rgb(255, 179, 179)',
    //               'rgb(201, 216, 242)',
    //               'rgb(255, 255, 153)',
    //               'rgb(179, 255, 179)',
    //               'rgb(236, 198, 236)',
    //               'rgb(255, 191, 128)'
    //             ],
    //             borderColor: [
    //                 'rgba(255,99,132,1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],

    //             borderWidth: 1,
    //             hoverBackgroundColor: [
    //               "#ff3300",
    //               "#1a75ff",
    //               "#ffff1a",
    //               "#00cc44",
    //               "#ac39ac",
    //               "#ff8c1a"
    //           ]
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero:true
    //                 }
    //             }]
    //         }
    //     }

    // });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'pie',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Black"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5]
          , fillColor: "rgba(99,123,133,0.4)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff"

          , backgroundColor: [

            'rgb(255, 179, 179)',
            'rgb(201, 216, 242)',
            'rgb(255, 255, 153)',
            'rgb(179, 255, 179)',
            'rgb(236, 198, 236)',
            'rgb(255, 191, 128)'
          ],
          hoverBackgroundColor: [
            "#ff3300",
            "#1a75ff",
            "#ffff1a",
            "#00cc44",
            "#ac39ac",
            "#ff8c1a"
          ]
        }]
      }

    });

    // this.lineChart = new Chart(this.lineCanvas.nativeElement, {

    //     type: 'line',
    //     data: {
    //         labels: ["January", "February", "March", "April", "May", "June", "July"],
    //         datasets: [
    //             {
    //                 label: "My First dataset",
    //                 fill: true,
    //                 lineTension: 0.1,
    //                 backgroundColor: "rgba(75,192,192,0.4)",
    //                 borderColor: "rgba(75,192,192,1)",
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 pointBorderColor: "rgba(75,192,192,1)",
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //                 pointHoverBorderColor: "rgba(220,220,220,1)",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //                 data: [65, 59, 80, 81, 56, 55, 40],
    //                 spanGaps: false,
    //             }
    //         ]
    //     }

    // });

  }

  //Function Reset client
  resetClient() {
    this.client.QueueId = "";
    this.client.Id = "";
    this.client.FirstName = "";
    this.client.MiddleName = "";
    this.client.LastName = "";
    this.client.Gender = "";
    this.client.Height = "";
    this.client.Age = "";
    this.client.CheckinTimeMinutes = "";
    this.client.BirthDate = null;
    this.client.ExpirationDate = null;
    this.client.LicenseNumber = "";
    this.client.StreetAddress = "";
    this.client.City = "";
    this.client.Jurisdiction = "";
    this.client.Postal = "";
    this.client.MobileNumber = "";
    this.client.LastCheckInDate = null;
    this.client.LastPurchaseDate = null;
    this.client.Tags = "";
  }








}
