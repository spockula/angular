import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  API_URL  = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  createAdmin(credentials) {
    return  this.httpClient.post(`${this.API_URL}/admin/register`, credentials);
  }

  registerStaff(credentials) {
    return  this.httpClient.post(`${this.API_URL}/register`, credentials);
  }
}
