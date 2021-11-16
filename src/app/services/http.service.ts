import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { enviroment as env } from 'src/enviroments/enviroment'
import { forkJoin, Observable } from 'rxjs';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering: string,
    search? : string
  ): Observable<APIResponse<game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`);

  }
}
