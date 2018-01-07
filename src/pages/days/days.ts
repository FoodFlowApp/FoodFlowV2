import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the DaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-days',
  templateUrl: 'days.html',
})
export class DaysPage {
  day = {
    todayDate: '',
    isMenstrating: '',
    mood: '',
    exercise: '',
    flow: '',
    carbs: '',
    fats: '',
    protiens: ''
  }

  today: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMonth();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaysPage');
  }

  getMonth() {
    this.today = moment();
    console.log(this.today);
  }

}
