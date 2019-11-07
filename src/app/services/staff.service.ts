import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  API_URL = environment.apiUrl;
  testUrl = 'https://peopleappapis.herokuapp.com/v1';

  constructor(private httpClient: HttpClient) { }

  getAllStaff() {
    return this.httpClient.get(`${this.API_URL}/staff`);
  }

  createStaff(staff) {
    return this.httpClient.post(`${this.API_URL}/staff/`, staff);
  }

  getCompanyStaff() {
    let companyId = '';
    if (localStorage.getItem('cu')) {
      companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
    return this.httpClient.get(`${this.API_URL}/staff/${companyId}/company`);
  }

  getBranchStaff(branchId) {
    return this.httpClient.get(`${this.API_URL}/staff/${branchId}/branch`);
  }

  submitCsv(companyId, csv) {
    return this.httpClient.post(`${this.testUrl}/staff/file/${companyId}`, csv);
  }
}
