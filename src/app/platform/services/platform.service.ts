import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { Platform } from '../models/platform.model';
 @Injectable()

export class PlatformService {
  baseUrl: string = `${config.apiUrl}/platforms/`;
  constructor(private http: HttpClient) {}

  getPlatforms() {
    return this.http.get(this.baseUrl );
  }

  createPlatform(platform: Platform) {
    return this.http.post(this.baseUrl , platform);
  }

  getPlatformById(id: number) {
    return this.http.get(this.baseUrl  + id);
  }

  updatePlatform(platform: Platform) {
    return this.http.put(
      this.baseUrl  + platform.id, platform);
  }


  deletePlatform(id: number) {
    return this.http.delete(
      this.baseUrl  + id);
  }

}
