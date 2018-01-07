import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataDisplayPage } from './data-display';
import { NvD3Module } from 'ng2-nvd3';


@NgModule({
  declarations: [
    DataDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(DataDisplayPage),
    NvD3Module
  ],
  entryComponents: [
    DataDisplayPage
  ]
})
export class DataDisplayPageModule {}
