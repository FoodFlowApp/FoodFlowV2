import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataDisplayPage } from './data-display';

@NgModule({
  declarations: [
    DataDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(DataDisplayPage),
  ],
})
export class DataDisplayPageModule {}
