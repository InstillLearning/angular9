import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'e47424fb019549c8a2f3ab80192eafac';

  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`);
    
  }

  
}
