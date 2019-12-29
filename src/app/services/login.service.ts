import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL  = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  doLogin(credentials) {
    return  this.httpClient.post(`${this.API_URL}/login`, credentials);
  }

  adminLogin(credentials) {
      return  this.httpClient.post(`${this.API_URL}/admin/login`, credentials);
  }

  companyLogin(credentials) {
    return  this.httpClient.post(`${this.API_URL}/company/`, credentials);
}

}
