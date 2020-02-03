import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  API_URL = environment.apiUrl;
  selectedStaff: any;
  // companyId: any;

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getAllStaff() {
    const companyId  =  JSON.stringify(this.loginService.userData['data']['message']['data']['companyId']);
    // tslint:disable-next-line:prefer-const
    let noQuotes = companyId.split('"').join('');
    return this.httpClient.get(`${this.API_URL}/staff/${noQuotes}/company`);
  }

  getStaffByEmail(staffEmail) {
    return this.httpClient.get(`${this.API_URL}/staff/${staffEmail}`);
  }

  getStaffId(staffId, companyId) {
    return this.httpClient.get(`${this.API_URL}/staff/id?staffId=${staffId}&companyId=${companyId}`);
  }

  getStaffName(staffName) {
    return this.httpClient.get(`${this.API_URL}/staff/${staffName}`);
  }

  createStaff(staff) {
    return this.httpClient.post(`${this.API_URL}/staff/`, staff);
  }

  getCompanyStaff(companyId) {
    return this.httpClient.get(`${this.API_URL}/staff/${companyId}/company`);
  }

  getBranchStaff(branchId) {
    return this.httpClient.get(`${this.API_URL}/staff/${branchId}/branch`);
  }

  getDepartmentStaff(departmentId) {
    return this.httpClient.get(`${this.API_URL}/staff/${departmentId}/department`);
  }

  checkIn(form) {
    return this.httpClient.post(`${this.API_URL}/checking/`, form);
  }

  getPolicy(companyId) {
    return this.httpClient.get(`${this.API_URL}/policy/${companyId}`);
  }

}
