import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  API_URL = environment.apiUrl;
  currentUser: Object;

  constructor(private httpClient: HttpClient) { }

  getCompanies() {
    return  this.httpClient.get(`${this.API_URL}/company`);
  }

  getCompanyById() {
    let companyId = '';
    if (localStorage.getItem('cu')) {
      this.currentUser = JSON.parse(localStorage.getItem('cu'));
      companyId = this.currentUser['companyId'];
    }
    return  this.httpClient.get(`${this.API_URL}/company/${companyId}`);
  }

  createCompany(company) {
    return  this.httpClient.post(`${this.API_URL}/company/`, company);
}
}
