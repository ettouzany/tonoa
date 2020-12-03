import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { Entite } from '../models/entite.model';
 @Injectable()

export class EntiteService {
  baseUrl: string = `${config.apiUrl}/courses`;
  constructor(private http: HttpClient) {}

  getEntites() {
    return this.http.get(this.baseUrl + 'entites');
  }

  createEntite(entite: Entite) {
    return this.http.post(this.baseUrl , entite);
  }

  getEntiteById(id: number) {
    return this.http.get(this.baseUrl + 'entites/' + id);
  }

  updateEntite(entite: Entite) {
    return this.http.put(
      this.baseUrl + 'entites/' + entite.id, entite);
  }


  deleteEntite(id: number) {
    return this.http.delete(
      this.baseUrl + 'entites/' + id);
  }

}
