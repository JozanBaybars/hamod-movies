import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMovies(limit:number, page:number): Observable<any>{
    return this.http.get<any>(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&page=${page}&sort_by=year&order_by=desc`);
  }
}
