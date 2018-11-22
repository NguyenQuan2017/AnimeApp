import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RestProvider} from "../rest/rest";

/*
  Generated class for the MangaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MangaProvider {

  constructor(public http: HttpClient,
              private restApi: RestProvider) {
    console.log('Hello MangaProvider Provider');
  }

  getLatestManga() {
    return new Promise(resolve => {
      this.http.get(this.restApi.apiUrl + 'manga/latest')
          .subscribe(data => {
            resolve(data);
          }, error2 => {
            console.log(error2);
          })
    })
  }

  getMangaByCategoryId(category_id) {
    return new Promise(resolve => {
      this.http.get(this.restApi.apiUrl + 'category/' + category_id + '/manga')
          .subscribe(data => {
            resolve(data);
          }, error2 => {
            console.log(error2)
          })
    })
  }

  getMangaByGenreId(genre_id) {
      return new Promise(resolve => {
          this.http.get(this.restApi.apiUrl + 'genre/' + genre_id + '/manga')
              .subscribe(data => {
                  resolve(data);
              }, error2 => {
                  console.log(error2)
              })
      })
  }

  getContentMangaById(manga_id) {
    return new Promise(resolve => {
      this.http.get(this.restApi.apiUrl + 'manga/' + manga_id + '/content')
          .subscribe(data => {
            resolve(data);
          }, error2 =>  {
            console.log(error2);
          })
    })
  }

  getFileManga(chapter_id, manga_id) {
    return new Promise(resolve => {
      this.http.get(this.restApi.apiUrl + 'chapter/' + chapter_id + '/manga/' + manga_id)
          .subscribe(data => {
            resolve(data);
          }, error2 => {
            console.log(error2)
          })
    })
  }
}
