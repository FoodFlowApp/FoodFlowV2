import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NvD3Module } from 'ng2-nvd3';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { DaysPage } from '../pages/days/days';
import { DataDisplayPage } from '../pages/data-display/data-display';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';
import { DaysProvider } from '../providers/days/days';

import nvd3 from 'nvd3';
import 'nvd3';
// import { NO_ERRORS_SCHEMA } from '@angular/core/src/metadata/ng_module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    DaysPage,
    DataDisplayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NvD3Module
  ],
  // schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    DaysPage,
    DataDisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    DaysProvider
  ]
})
export class AppModule {}
