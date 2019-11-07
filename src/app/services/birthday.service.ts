import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getBirthdays() {
    return this.httpClient.get(`${this.API_URL}/birthday`);
  }

  createBirthday(birthday: any) {
    return this.httpClient.post(`${this.API_URL}/birthday/`, birthday);
  }

  getCompanyBirthdays() {
    var companyId= '';
    if (localStorage.getItem('cu')) {
      companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
 
    return this.httpClient.get(`${this.API_URL}/birthday/${companyId}/company`);
  }
}
