import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaysPage } from './days';

@NgModule({
  declarations: [
    DaysPage,
  ],
  imports: [
    IonicPageModule.forChild(DaysPage),
  ],
})
export class DaysPageModule {}
