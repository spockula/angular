import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {
  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getBirthdays() {
    let companyId  =  JSON.stringify(this.loginService.userData['data']['message']['data']['companyId']);
    var noQuotes = companyId.split('"').join('');
    return this.httpClient.get(`${this.API_URL}/birthday/${noQuotes}/company`);
  }

  getCompanyBirthdays(companyId) {
    return this.httpClient.get(`${this.API_URL}/birthday/${companyId}/company`);
  }
}
