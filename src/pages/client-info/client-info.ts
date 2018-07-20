import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
// import { Chart } from 'chart.js';
import { Configuration } from '../../app/BL/Configuraion';
import { ClientID } from '../../app/BL/ClientID';
//import { ClientPurchases } from '../../app/BL/ClientPurchases';
import { DatePipe } from '@angular/common'

@IonicPage()
@Component({
  selector: 'page-client-info',
  templateUrl: 'client-info.html',
})
export class ClientInfoPage {

  @ViewChild('myChart') myChart: ElementRef;

  client: ClientID;
   //listPurchases: ClientPurchases[];

  // data = [];
  // ict_unit =[];
  // efficiency =[];
  // coloR = [];
  // barGraph: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public events: Events, public _configuratoin: Configuration, public datepipe: DatePipe) {

    debugger;

    this.client = new ClientID();
    //this.listPurchases = [];

    var paramVal = navParams.get('clientBasicInfo');
    if (paramVal != undefined && paramVal != null) {
      this.client = paramVal;
      //this.listPurchases = this.client.Purchases;
    }

    events.subscribe("showClientBasicInfo", (selectClient) => {
      debugger;
      this.client = selectClient;
      console.log("event subscribed for Client Basic info");
    })
  }

  // //make chart for purchases
  // loadPurchases() {
  //   debugger;
  //   this.data = this.listPurchases;
  //   this.ict_unit = [];
  //   this.efficiency = [];
  //   this.coloR = [];

  //   var dynamicColors = function (i, total) {
  //     var r = 100 + i * 155 / total;
  //     var g = i * 255 / total;
  //     var b = i * 255 / total;
  //     return "rgb(" + r + "," + g + "," + b + ")";
  //   };

  //   // var dynamicColors = function (i, total) {
  //   //   debugger;
  //   //   var r = 50 + i * 35 / total;
  //   //   var g = i * 170 / total;
  //   //   var b = i * 20 / total;
  //   //   return "rgb(" + r + "," + g + "," + b + ")";
  //   // };

  //   // var dynamicColors = function (i, total) {
  //   //   debugger;
  //   //   var r = 50 + i * 35 / total;
  //   //   var g = i * 150 / total;
  //   //   var b = i * 180 / total;
  //   //   return "rgb(" + r + "," + g + "," + b + ")";
  //   // };

  //   for (var i in this.data) {
  //     debugger;
  //     // ict_unit.push("aaaa");
  //     this.ict_unit.push(this.data[i].ProductName);
  //     this.efficiency.push(this.data[i].Quantity);
  //     this.coloR.push(dynamicColors(i, this.data.length));
  //   }
  //   var chartData = {

  //     labels: this.ict_unit,
  //     datasets: [{
  //       label: 'Efficiency ',
  //       //strokeColor:backGround,

  //       backgroundColor: this.coloR,

  //       borderColor: 'rgba(200, 200, 200, 0.75)',
  //       //hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
  //       //hoverBorderColor: 'rgba(200, 200, 200, 1)',
  //       data: this.efficiency
  //     }]
  //   };

  //   //this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement

  //   if (this.barGraph) {
  //     this.barGraph.destroy();
  //   }

  //    var ctx = document.getElementById("myChart");
  //   //var ctx = document.getElementById("mybarChart2").getContext("2d");

    

  //   this.barGraph = new Chart(ctx, {
  //     type: 'pie',
  //     data: chartData
  //   })

  //   // this.barGraph.destroy();

  //   console.log("view child chart =" + this.myChart)

  //   // var barGraph = new Chart(this.myChart.nativeElement, {
  //   //   type: 'pie',
  //   //   data: chartData
  //   // })
  // }

  // ionViewDidEnter() {
  //   debugger;
  //   //call load Purchases
  //   //clear data
  //   this.data = [];
  //   this.ict_unit =[];
  //   this.efficiency =[];
  //   this.coloR = [];
  //   // this.barGraph.destroy();

  //   this.loadPurchases();
  // }

  // ionViewDidLoad() {
  //console.log('ionViewDidLoad SelectClientPage');
  //}


  ngOnInit() {
    debugger;
    //call load Purchases
    //this.loadPurchases();
  }

  ionViewDidLoad() {
    debugger;
    console.log('ionViewDidLoad SelectClientPage');

    // //call load Purchases
    // this.loadPurchases();


    // var data = new Array("5", "7", "9", "2", "8", "6", "1");
    // var data = this.listPurchases;
    // var ict_unit = [];
    // var efficiency = [];
    // var coloR = [];

    // var dynamicColors = function (i, total) {
    //   var r = 100 + i * 155 / total;
    //   var g = i * 255 / total;
    //   var b = i * 255 / total;
    //   return "rgb(" + r + "," + g + "," + b + ")";
    // };

    // for (var i in data) {
    //   debugger;
    //   // ict_unit.push("aaaa");
    //   ict_unit.push(data[i].ProductName);
    //   efficiency.push(data[i].Quantity);
    //   coloR.push(dynamicColors(i, data.length));
    // }
    // var chartData = {

    //   labels: ict_unit,
    //   datasets: [{
    //     label: 'Efficiency ',
    //     //strokeColor:backGround,

    //     backgroundColor: coloR,

    //     borderColor: 'rgba(200, 200, 200, 0.75)',
    //     //hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
    //     hoverBorderColor: 'rgba(200, 200, 200, 1)',
    //     data: efficiency
    //   }]
    // };

    // var ctx = document.getElementById("myChart");
    // var barGraph = new Chart(ctx, {
    //   type: 'pie',
    //   data: chartData
    // })


    // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

    //   type: 'pie',
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Black"],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5]
    //       , fillColor: "rgba(99,123,133,0.4)",
    //       strokeColor: "rgba(220,220,220,1)",
    //       pointColor: "rgba(220,220,220,1)",
    //       pointStrokeColor: "#fff"

    //       , backgroundColor: [

    //         'rgb(255, 179, 179)',
    //         'rgb(201, 216, 242)',
    //         'rgb(255, 255, 153)',
    //         'rgb(179, 255, 179)',
    //         'rgb(236, 198, 236)',
    //         'rgb(255, 191, 128)'
    //       ],
    //       hoverBackgroundColor: [
    //         "#ff3300",
    //         "#1a75ff",
    //         "#ffff1a",
    //         "#00cc44",
    //         "#ac39ac",
    //         "#ff8c1a"
    //       ]
    //     }]
    //   }

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
