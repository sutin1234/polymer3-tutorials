import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = 'http://scan-brand.com/registration';
  constructor(private _httpClient: HttpClient) { }
  saveCourse(dataCourse){
    return this._httpClient.post(this.baseUrl+'/add.php', dataCourse);
  }
}
