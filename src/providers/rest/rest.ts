import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost:9000/api/v1/public/';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

}
