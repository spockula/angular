import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  API_URL  = environment.apiUrl;
  testUrl = 'https://peopleappapis.herokuapp.com/v1';

  constructor(private httpClient: HttpClient) { }

  createAdmin(credentials) {
    return  this.httpClient.post(`${this.testUrl}/admin/register`, credentials);
  }

  registerStaff(credentials) {
    return  this.httpClient.post(`${this.testUrl}/register`, credentials);
  }
}
