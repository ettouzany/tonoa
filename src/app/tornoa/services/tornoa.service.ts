import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { Tornoa } from '../models/tornoa.model';
 @Injectable()

export class TornoaService {
  baseUrl: string = `${config.apiUrl}/tournaments`;
  constructor(private http: HttpClient) {}

  getTornoas() {
    return this.http.get(this.baseUrl + 'tournaments');
  }

  createTornoa(tornoa: Tornoa) {
    return this.http.post(this.baseUrl , tornoa);
  }

  getTornoaById(id: number) {
    return this.http.get(this.baseUrl + 'tournaments/' + id);
  }

  updateTornoa(tornoa: Tornoa) {
    return this.http.put(
      this.baseUrl + 'tournaments/' + tornoa.id, tornoa);
  }


  deleteTornoa(id: number) {
    return this.http.delete(
      this.baseUrl + 'tournaments/' + id);
  }

}
