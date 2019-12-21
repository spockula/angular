import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  API_URL = environment.apiUrl;
  testUrl = 'https://peopleappapis.herokuapp.com/v1';
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
    return  this.httpClient.get(`${this.testUrl}/company/${companyId}`);
  }

  createCompany(company) {
    return  this.httpClient.post(`${this.API_URL}/company/`, company);
}

policyUpload(form) {
  return  this.httpClient.post(`${this.testUrl}/policy/`, form);
}

logoUpload(form) {
  return  this.httpClient.post(`${this.testUrl}/companylogo/`, form);
}

updateLogo(companyId, form) {
  return this.httpClient.put(`${this.testUrl}/companylogo/${companyId}`, form);
}

getPolicy(companyId) {
  return this.httpClient.get(`${this.testUrl}/policy/${companyId}`);
}

getLogo(companyId) {
  return this.httpClient.get(`${this.testUrl}/companylogo/${companyId}/company`);
}

getCheckingByCompany(companyId, checkIn: boolean) {
  return this.httpClient.get(`${this.testUrl}/checking/company/${companyId}?checkIn=${checkIn}`);
}

getCheckingByDepartment(departmentId) {
  return this.httpClient.get(`${this.testUrl}/checking/department/${departmentId}`);
}

getCheckingByStaff(staffId) {
  return this.httpClient.get(`${this.testUrl}/checking/staff/${staffId}`);
}

}
