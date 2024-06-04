import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }


  //api call tp get the data on search
  //args:search-string
  public getData(search:string){
    return this.httpClient.get(`http://www.omdbapi.com/?i=tt3896198&apikey=fa2a54f1&t=${search}`);
  }
}
