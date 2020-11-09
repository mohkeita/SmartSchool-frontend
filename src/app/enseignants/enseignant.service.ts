import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Enseignant} from '../models/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private baseUrl = 'http://localhost:5000/api/teacher';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.baseUrl}/${id}`);
  }

  post(enseignant: Enseignant) {
    return this.http.post(`${this.baseUrl}`, enseignant);
  }

  put(id: number, enseignant: Enseignant) {
    return this.http.put(`${this.baseUrl}/${id}`, enseignant);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
