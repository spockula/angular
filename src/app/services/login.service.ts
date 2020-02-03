import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = environment.apiUrl;
  userData: any;

  constructor(private httpClient: HttpClient) { }

  login(loginData) {
    return this.httpClient.post(`${this.API_URL}/login/`, loginData);
  }
}
