import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIFOOTBALLService {

  constructor(private http: HttpClient) { }
  getFootball(searchTerm){
    return this.http.get(
      'https://apifootball.com/api/?action=get_standings&league_id='+searchTerm +'&APIkey=33ffb2cbc73abd9b960a44fa445daa6e56c06867037e4fffba32371b014dd0bd');

     
  }
}
