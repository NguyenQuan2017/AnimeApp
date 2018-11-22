import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RestProvider} from "../rest/rest";

/*
  Generated class for the GenreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GenreProvider {

  constructor(
      public http: HttpClient,
      public restApi: RestProvider
     )
  {
    console.log('Hello GenreProvider Provider');
  }

  getListGenre() {
    return new Promise(resolve => {
      this.http.get(this.restApi.apiUrl + 'genre').subscribe(data => {
        resolve(data);
      }, error2 => {
        console.log(error2);
      })
    })
  }
}
