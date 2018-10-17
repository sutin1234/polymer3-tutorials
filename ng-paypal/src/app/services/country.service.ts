import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
baseUrl = 'http://scan-brand.com/registration/country/';

  constructor(private _httpClient: HttpClient) { }
  getCountry(){
    return this._httpClient.get(this.baseUrl);
  }
}
