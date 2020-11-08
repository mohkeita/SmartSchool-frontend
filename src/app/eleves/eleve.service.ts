import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Eleve} from '../models/Eleve';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  baseUrl = 'http://localhost:5000/api/student';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.baseUrl}/${id}`);
  }

  post(eleve: Eleve) {
    return this.http.post(`${this.baseUrl}`, eleve);
  }

  put(id: number, eleve: Eleve) {
    return this.http.put(`${this.baseUrl}/${id}`, eleve);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
