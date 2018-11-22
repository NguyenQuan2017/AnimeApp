import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import {config} from "../config/app.config";
import { CategoryProvider } from '../providers/category/category';
import {CategoryPage} from "../pages/category/category";
import {HttpClientModule} from "@angular/common/http";
import { RestProvider } from '../providers/rest/rest';
import { GenreProvider } from '../providers/genre/genre';
import { MangaProvider } from '../providers/manga/manga';
import {MangaPage} from "../pages/manga/manga";
import {SlideMangaPage} from "../pages/slide-manga/slide-manga";
import {GenrePage} from "../pages/genre/genre";

firebase.initializeApp(config.fireBaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    MangaPage,
    SlideMangaPage,
    GenrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    MangaPage,
    SlideMangaPage,
    GenrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoryProvider,
    RestProvider,
    CategoryProvider,
    GenreProvider,
    MangaProvider
  ]
})
export class AppModule {}
