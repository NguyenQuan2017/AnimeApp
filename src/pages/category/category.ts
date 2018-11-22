import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MangaProvider} from "../../providers/manga/manga";
import {CategoryProvider} from "../../providers/category/category";

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  category_id: string;
  mangas: any;
  category: any = {
    category_name: null
  };
  public url = 'http://localhost:9000';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public mangaService: MangaProvider,
              public categoryService: CategoryProvider) {
    this.category_id = navParams.get('category_id');
    this.getCategoryNameById();
  }

  ionViewDidLoad() {

   this.getMangaByCategoryId();
  }

  getMangaByCategoryId(): any {
    return this.mangaService.getMangaByCategoryId(this.category_id).then(data => {
      this.mangas = data['data'];
    })
  }

  getCategoryNameById(): any {
    return this.categoryService.getCategoryName(this.category_id).then(data => {
      this.category = data['data'];
    })
  }

}
