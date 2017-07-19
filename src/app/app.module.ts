import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { VirtualScrollModule } from '../virtual-scroll';
import { ListItemComponent } from './lists/list-item.component';
import { ListWithApiComponent } from './lists/list-with-api.component';
import { MultiColListComponent } from './lists/multi-col-list.component';
import { TableListComponent } from './lists/table-list.component';
import { VerticalListComponent } from './lists/vertical-list.component';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListItemComponent,
    ListWithApiComponent,
    MultiColListComponent,
    TableListComponent,
    VerticalListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    VirtualScrollModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListItemComponent,
    ListWithApiComponent,
    MultiColListComponent,
    TableListComponent,
    VerticalListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListItemComponent,
    ListWithApiComponent,
    MultiColListComponent,
    TableListComponent,
    VerticalListComponent,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
