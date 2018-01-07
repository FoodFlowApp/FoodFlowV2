import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as d3 from 'd3';
import { Chart } from 'chart.js';

/**
 * Generated class for the DatadisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-display',
  templateUrl: 'data-display.html',
})
export class DataDisplayPage {
  is100Days: boolean = false;
  buttonText: string = '100 Days';

  @ViewChild('lineCanvas30') lineCanvas30;
  // @ViewChild('lineCanvas100') lineCanvas100;

  lineChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleGraphView() {
    if(this.is100Days) {
      this.is100Days = false;
      this.buttonText = '100 Days';
    } else {
      this.is100Days = true;
      this.buttonText = '30 Days';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataDisplayPage');
  

  this.lineChart = new Chart(this.lineCanvas30.nativeElement, {
    type: 'line',
    data: {
        labels: ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1/10", "1/11", "1/12", "1/13", "1/14", "1/15", "1/16", "1/17", "1/18", "1/19", "1/20", "1/21", "1/22", "1/23", "1/24", "1/25", "1/26", "1/27", "1/28", "1/29", "1/30", "1/31"],
        datasets: [
            {
                label: "Carbs",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(184,255,124,0.4)",
                borderColor: "rgba(184,255,124,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(184,255,124,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(184,255,124,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1.0, 1.3, 1.4, .9, 1.0, 1.0, 1.5, 1.0, 1.3, 1.2, 1.3, 1.0, 1.2, 1.9, 1.7, 1.1, 1.2, 1.5, 1.4, 1.2, 1.2, 1.3, 1.4, 4.0, 1.3, 1.4, 1.3, 1.3, 1.5, 2.0, 1.2],
                spanGaps: false,
            },
            {
              label: "Protein",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(23,232,54,0.4)",
              borderColor: "rgba(23,232,54,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(23,232,54,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(23,232,54,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [4.0, 4.2, 3.8, 3.5, 3.4, 3.6, 3.2, 3.4, 3.5, 4.0, 4.4, 3.1, 3.4, 4.0, 3, 4.1, 3.8, 3.2, 5.0, 4.5, 4.0, 3.4, 3.4, 3.5, 3.7, 4.0, 3.9, 3.8, 3.5, 4.2, 4.2],
              spanGaps: false,
          },
          {
            label: "Fat",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(9,193,232,0.4)",
            borderColor: "rgba(9,193,232,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(9,193,232,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(9,193,232,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4, 4, 5, 4, 4, 5, 4, 4, 4, 4.0, 5, 4.3, 4, 4.0, 4.2, 4.4, 4.3, 4.4, 5.0, 4.8, 4.3, 3.2, 5, 2, 4, 4.0, 3.9, 3.8, 3.5, 4.2, 4.2],
            spanGaps: false,
        },
          {
            label: "Flow Heaviness",
            type: 'line',
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(208,77,50,0.4)",
            borderColor: "rgba(208,77,50,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(208,77,50,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(208,77,50,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 7, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            spanGaps: false,
        },
        {
          label: "Mood",
          type: 'line',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(89,89,255,0.4)",
          borderColor: "rgba(89,89,255,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(89,89,255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(89,89,255,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [2, 3, 2, 3, 2, 2, 1, 4, 3, 5, 6, 5, 4, 4, 2, 3, 2, 2, 3, 2, 1, 1, 1, 1, 7, 1, 1, 2, 1, 1, 1],
          spanGaps: false,
      }
        ],
    }
  });
  }
}
