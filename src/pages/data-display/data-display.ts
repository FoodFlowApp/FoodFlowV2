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

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
  lineChart100: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataDisplayPage');
  

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    data: {
        labels: ["7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7", "7/8", "7/9", "7/10", "7/11", "7/12", "7/13", "7/14", "7/15", "7/16", "7/17", "7/18", "7/19", "7/20", "7/21", "7/22", "7/23", "7/24", "7/25", "7/26", "7/27", "7/28", "7/29", "7/30", "7/31"],
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

  this.lineChart100 = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    data: {
        labels: [9/30,10/1,10/2,10/3,10/4,10/5,10/6,10/7,10/8,10/9,10/10,10/11,10/12,10/13,10/14,10/15,10/16,10/17,10/18,10/19,10/20,10/21,10/22,10/23,10/24,10/25,10/26,10/27,10/28,10/29,10/30,10/31,11/1,11/2,11/3,11/4,11/5,11/6,11/7,11/8,11/9,11/10,11/11,11/12,11/13,11/14,11/15,11/16,11/17,11/18,11/19,11/20,11/21,11/22,11/23,11/24,11/25,11/26,11/27,11/28,11/29,11/30,12/1,12/2,12/3,12/4,12/5,12/6,12/7,12/8,12/9,12/10,12/11,12/12,12/13,12/14,12/15,12/16,12/17,12/18,12/19,12/20,12/21,12/22,12/23,12/24,12/25,12/26,12/27,12/28,12/29,12/30,12/31,1/1,1/2,1/3,1/4,1/5,1/6,1/7],
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
                data: [1.0, 1.3, 1.4, .9, 1.0, 1.0, 1.5, 1.0, 1.3, 1.2, 1.3, 1.0, 1.2, 1.9, 1.7, 1.1, 1.2, 1.5, 1.4, 1.2, 1.2, 1.3, 1.4, 4.0, 1.3, 1.4, 1.3, 1.3, 1.5, 2.0, 1.2, 1.2,1,1.3,1.4,0.9,1.0,1.0,1.5,1.0,1.3,1.2,1.3,1.0,1.2,1.9,1.7,1.1,1.2,1.5,1.4,1.2,1.2,1.3,4.0,1.2,1.3,1.4,1.3,1.3,1.5,2.0,1.2,1.0,1.3,1.4,9,1.0,1.0,1.5,1,1.3,1.2,1.3,1,1.2,1.9,1.7,1.1,1.2,1.5,1.4,1.2,1.2,1.3,4,1.2,1.3,1.4,1.3,1.3,1.5,1.0,1.2,1,1.3,1.4,9,1,1,1.5],
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
              data: [4.0, 4.2, 3.8, 3.5, 3.4, 3.6, 3.2, 3.4, 3.5, 4.0, 4.4, 3.1, 3.4, 4.0, 3, 4.1, 3.8, 3.2, 5.0, 4.5, 4.0, 3.4, 3.4, 3.5, 3.7, 4.0, 3.9, 3.8, 3.5, 4.2, 4.2, 5,4.5,4.8,5.6,5.6,5.4,5.3,5.6,5.2,3.8,4.2,4.7,5.4,4.1,4.1,4.5,4.5,4.1,3.6,4,4.5,5.5,5.2,3,5,4.6,4.8,4.9,5,3.8,4.6,5,4.5,4.8,5.6,5.6,5.4,5.3,5.6,5.2,3.8,4.2,4.7,5.4,4.1,4.1,4.5,4.5,4.1,3.6,4,4.5,5.5,5.2,3,5,4.6,4.8,4.9,5,3.8,4.6,5,4.5,4.8,5.6,5.6,5.4,5.3],
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
            data: [4, 4, 5, 4, 4, 5, 4, 4, 4, 4.0, 5, 4.3, 4, 4.0, 4.2, 4.4, 4.3, 4.4, 5.0, 4.8, 4.3, 3.2, 5, 2, 4, 4.0, 3.9, 3.8, 3.5, 4.2, 4.2,4,4.2,3.8,3.5,3.4,3.6,3.2,3.4,3.5,5,4.5,4.3,3.4,4,4.2,4.4,4.3,4.4,5,4.8,4.3,3.2,3.4,3.5,3.7,4,3.9,3.8,3.5,4.2,4.2,4,4.2,3.8,3.5,3.4,3.6,4.2,4.4,4.5,5,4.5,4.3,4.4,4,4.2,4.4,4.3,4.4,5,4.8,4.3,3.2,3.4,3.5,3.7,4,3.9,3.8,4.5,4.2,4.2,4,4.2,3.8,3.5,3.4,3.6,3.2],
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
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 7, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,8,7,4,4,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,6,5,4,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
          data: [2, 3, 2, 3, 2, 2, 1, 4, 3, 5, 6, 5, 4, 4, 2, 3, 2, 2, 3, 2, 1, 1, 1, 1, 7, 1, 1, 2, 1, 1, 1, 1,3,2,4,1,2,1,2,3,5,8,10,5,6,4,3,2,3,2,1,3,2,3,2,1,1,1,1,1,3,4,5,3,2,2,1,2,3,2,1,2,1,2,4,5,6,7,4,3,2,1,3,2,1,2,1,3,5,4,2,1,1,3,4,3,2,1,2,1],
          spanGaps: false,
      }
        ],
    }
  });
  }
}
