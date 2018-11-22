import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MangaProvider} from "../../providers/manga/manga";
import {MangaPage} from "../manga/manga";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mangas: any;
  public url = 'http://localhost:9000';

  constructor(public navCtrl: NavController,
              private mangaService: MangaProvider) {
      this.getLatestManga()
  }

  getLatestManga() {
    this.mangaService.getLatestManga().then(data => {
      this.mangas = data['data'];
      console.log(this.mangas);
    })
  }
  goToManga(manga_id) {
    this.navCtrl.push(MangaPage, {manga_id: manga_id})
  }
}
