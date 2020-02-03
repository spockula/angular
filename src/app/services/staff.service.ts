import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  API_URL = environment.apiUrl;
  test = 'https://peopleappapis.herokuapp.com/v1';

  constructor(private httpClient: HttpClient) { }

  getAllStaff() {
    return this.httpClient.get(`${this.API_URL}/staff`);
  }

  createStaff(staff) {
    return this.httpClient.post(`${this.test}/staff/`, staff);
  }

  getStaffId(staffId) {
    return this.httpClient.get(`${this.API_URL}/staff/${staffId}`);
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
    return this.httpClient.post(`${this.API_URL}/staff/file/${companyId}`, csv);
  }

  newPassword(body): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/new-password`, body);
  }

}
