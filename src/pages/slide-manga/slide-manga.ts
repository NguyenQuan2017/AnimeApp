import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MangaProvider} from "../../providers/manga/manga";

/**
 * Generated class for the SlideMangaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide-manga',
  templateUrl: 'slide-manga.html',
})
export class SlideMangaPage {
  manga_id: number;
  chapter_id: number;
  manga: any = {
    chapter: null
  };
  manga_name: any  = {
      manga_name: null
  };
  files: any;
  public url = 'http://localhost:9000';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public mangaService: MangaProvider) {
    this.manga_id  = this.navParams.get('manga_id');
    this.chapter_id  = this.navParams.get('chapter_id');
    console.log(this.manga_id);
    console.log(this.chapter_id);
  }

  ionViewDidLoad() {
    this.getSlideManga();
  }

  getSlideManga(): any {
    return this.mangaService.getFileManga(this.chapter_id, this.manga_id)
        .then(data => {
          this.manga = data['data'];
          this.files = this.manga['files'];
          this.manga_name = this.manga['manga'];
          console.log(this.manga_name);
          console.log(this.files);
        })
  }

}
