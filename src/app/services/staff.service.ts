import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.httpClient.post(`${this.API_URL}/staff/`, staff);
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

  newPassword(body: Object) {
    return this.httpClient.post(`${this.test}/requestpassword`, body);
  }

  updatePassword(staffId, body): Observable<any> {
    return this.httpClient.post(`${this.test}/register/staff/${staffId}`, body);
  }

  checkToken(token, body): Observable<any> {
    return this.httpClient.get(`${this.test}/reset-password?token=${token}`, body);
  }

  submitPassword(body): Observable<any> {
    return this.httpClient.post(`${this.test}/submit-password`, body);
  }

}
