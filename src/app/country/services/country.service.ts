import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { Country } from '../models/country.model';
 @Injectable()

export class CountryService {
  baseUrl: string = `${config.apiUrl}/countries/`;
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(this.baseUrl );
  }

  createCountry(country: Country) {
    return this.http.post(this.baseUrl , country);
  }

  getCountryById(id: number) {
    return this.http.get(this.baseUrl  + id);
  }

  updateCountry(country: Country) {
    return this.http.put(
      this.baseUrl + country.id, country);
  }

  deleteCountry(id: number) {
    return this.http.delete(
      this.baseUrl + id);
  }
}
