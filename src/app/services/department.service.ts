import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  API_URL  = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getDepartments() {
    return  this.httpClient.get(`${this.API_URL}/department`);
  }

  createDepartment(department) {
    return  this.httpClient.post(`${this.API_URL}/department/`, department);
}

getCompanyDepartments() {
  let companyId = '';
    if (localStorage.getItem('cu')) {
      companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
  return this.httpClient.get(`${this.API_URL}/department/${companyId}/company`);
}

}
