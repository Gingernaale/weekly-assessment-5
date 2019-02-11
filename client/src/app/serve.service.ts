import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from './topic';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`http://localhost:3000/`);
  }

  addTopic(topic: string): Observable<Topic[]> {
    return this.http.post<Topic[]>(`http://localhost:3000/`, topic);
  }

}
