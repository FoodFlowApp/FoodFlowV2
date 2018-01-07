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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataDisplayPage');
  

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    data: {
        labels: ["7/1/2017", "7/2/2017", "7/3/2017", "7/4/2017", "7/5/2017", "7/6/2017", "7/7/2017", "7/8/2017", "7/9/2017", "7/10/2017", "7/11/2017", "7/12/2017", "7/13/2017", "7/14/2017", "7/15/2017", "7/16/2017", "7/17/2017", "7/18/2017", "7/19/2017", "7/20/2017", "7/21/2017", "7/22/2017", "7/23/2017", "7/24/2017", "7/25/2017", "7/26/2017", "7/27/2017", "7/28/2017", "7/29/2017", "7/30/2017", "7/31/2017"],
        datasets: [
            {
                label: "Carbs",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
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
              backgroundColor: "rgba(192,75,192,0.4)",
              borderColor: "rgba(192,75,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(192,75,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(192,75,192,1)",
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
            backgroundColor: "rgba(0,192,255,0.4)",
            borderColor: "rgba(0,192,255,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(0,192,255,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,192,255,1)",
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
            backgroundColor: "rgba(255,0,1,0.4)",
            borderColor: "rgba(255,0,1,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,0,1,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,0,1,1)",
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
          backgroundColor: "rgba(100,0,100,0.4)",
          borderColor: "rgba(100,0,100,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(100,0,100,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(100,0,100,1)",
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
