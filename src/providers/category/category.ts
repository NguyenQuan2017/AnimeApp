import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RestProvider} from "../rest/rest";

@Injectable()
export class CategoryProvider {

  constructor(public http: HttpClient,
              public restApi: RestProvider ) {
    console.log('Hello CategoryProvider Provider');
  }


  getListCategory() {
    return new Promise(resolve => {
      this.http.get(this.restApi.apiUrl + 'category').subscribe(data => {
        resolve(data);
      },
          err => {
            console.log(err)
          })
    })
  }

  getCategoryName(category_id) {
    return new Promise(resolve => {
      this.http.get(this.restApi.apiUrl + 'category/' + category_id + '/name').subscribe(data => {
        resolve(data);
      }, error2 => {
        console.log(error2)
      })
    })
  }
}
