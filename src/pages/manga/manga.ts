import {Component, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Tabs} from 'ionic-angular';
import {MangaProvider} from "../../providers/manga/manga";
import {SlideMangaPage} from "../slide-manga/slide-manga";

/**
 * Generated class for the MangaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manga',
  templateUrl: 'manga.html',
})
export class MangaPage {
  manga_id: number;
  manga= {
    manga_name:null,
    file: {
      path: null
    }
  };

  activeMenu: string;
  @ViewChild('myTabs') tabRef: Tabs;
  public url = 'http://localhost:9000';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public mangaService: MangaProvider,
              public menu: MenuController) {
    this.manga_id = this.navParams.get('manga_id');
      this.menu1Active();
  }

  ionViewDidLoad() {
      this.getContentMangaById();
  }

  getContentMangaById(): any {
    return this.mangaService.getContentMangaById(this.manga_id).then(data => {
      this.manga = data['data'];
      console.log(this.menu)
    })
  }
  menu1Active() {
    this.activeMenu = 'menu1';
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
  }
  menu2Active() {
    this.activeMenu = 'menu2';
    this.menu.enable(false, 'menu1');
    this.menu.enable(true, 'menu2');
  }

  goToRead(manga_id, chapter_id) {
      this.navCtrl.push(SlideMangaPage, {manga_id: manga_id, chapter_id: chapter_id})
  }

}
