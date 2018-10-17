import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyType } from '../interfaces/company-type';

@Injectable({
  providedIn: 'root'
})
export class CompanyTypeService {
  baseURL = 'http://scan-brand.com/registration/affilition/index.php';


  constructor(private _httpClient: HttpClient) { }
  getCompanyType() {
    return this._httpClient.get<CompanyType[]>(this.baseURL);
  }
}
