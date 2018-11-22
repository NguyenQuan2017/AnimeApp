import { Component, ViewChild } from '@angular/core';
import {Events, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {CategoryProvider} from "../providers/category/category";
import {GenreProvider} from "../providers/genre/genre";
import {CategoryPage} from "../pages/category/category";
import {GenrePage} from "../pages/genre/genre";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  categories: any;
  genres: any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              private categoryService: CategoryProvider,
              private genreService: GenreProvider,
              public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
    ];

    this.getCategory();
    this.getGenre();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getCategory(): any {
   this.categoryService.getListCategory().then(data => {
     this.categories = data['data'];
     console.log(this.categories);
   })
  }

  getGenre(): any {
    this.genreService.getListGenre().then(data => {
      this.genres = data['data'];
      console.log(this.genres);
    })
  }
  goToCategory(category_id) {
    this.nav.push(CategoryPage, {category_id: category_id})
  }

  goToGenre(genre_id, genre_name) {
    this.nav.push(GenrePage, {genre_id: genre_id,genre_name: genre_name})
  }
}
