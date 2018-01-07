import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DaysPage } from '../days/days'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToDaily() {
    this.navCtrl.push(DaysPage);
  }
}

