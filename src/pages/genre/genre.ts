import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MangaProvider} from "../../providers/manga/manga";

/**
 * Generated class for the GenrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genre',
  templateUrl: 'genre.html',
})
export class GenrePage {
  genre_id: number;
  genre_name: string;
  mangas: any;
  public url = 'http://localhost:9000';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public mangaService: MangaProvider) {
    this.genre_id = this.navParams.get('genre_id');
    this.genre_name = this.navParams.get('genre_name');
    console.log(this.genre_id)
  }

  ionViewDidLoad() {
    this.getMangaByGenreId();
  }

  getMangaByGenreId(): any {
    return this.mangaService.getMangaByGenreId(this.genre_id)
        .then(data => {
          this.mangas = data['data'];
        })
  }

}
