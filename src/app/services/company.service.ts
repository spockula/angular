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

policyUpload(form) {
  return  this.httpClient.post(`${this.API_URL}/policy/`, form);
}

logoUpload(form) {
  return  this.httpClient.post(`${this.API_URL}/companylogo/`, form);
}

updateLogo(companyId, form) {
  return this.httpClient.put(`${this.API_URL}/companylogo/${companyId}`, form);
}

getPolicy(companyId) {
  return this.httpClient.get(`${this.API_URL}/policy/${companyId}`);
}

getLogo(companyId) {
  return this.httpClient.get(`${this.API_URL}/companylogo/${companyId}/company`);
}

getCheckingByCompany(companyId, checkIn: boolean) {
  return this.httpClient.get(`${this.API_URL}/checking/company/${companyId}?checkIn=${checkIn}`);
}

getCheckingByDepartment(departmentId) {
  return this.httpClient.get(`${this.API_URL}/checking/department/${departmentId}`);
}

getCheckingByStaff(staffId) {
  return this.httpClient.get(`${this.API_URL}/checking/staff/${staffId}`);
}

}
