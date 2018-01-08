import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  showMens = false;
  showNut = false;
  showFit = false;

  exampleUserOne: Object = 
  {
    name: 'Flo Daies',
    birthdate: 'April 2, 1988',
    height: 5,
    inches: 4,
    weight: 150,
    birthControl: false,
  };

  exampleUserTwo: Object = 
  {
    name: 'Jules Sparkle',
    birthdate: '12/15/86',
    height: 5,
    inches: 4,
    weight: 150,
    birthControl: false,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  showMenstrual() {
    this.showMens = !this.showMens;
  }

  showNutrition() {
    this.showNut = !this.showNut;
  }

  showFitness() {
    this.showFit = !this.showFit;
  }

}
