import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from './login.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  date = new Date();
  API_URL = environment.apiUrl;
  HolidayAPI_URL  = environment.holidayUrl;
  year = this.date.getFullYear();
  constructor(private httpClient: HttpClient, private nativeStorage: NativeStorage, private loginService: LoginService) { }

  getHoliday() {
    return  this.httpClient.get(`${this.HolidayAPI_URL}&year=${this.year}`);
  }

  getCompanyLeave(companyId) {
    return this.httpClient.get(`${this.API_URL}/leave/all/${companyId}`);
  }

  leaveApproved(staffId) {
    return this.httpClient.get(`${this.API_URL}/leave/all/${staffId}`);
  }

  getStaffRequests(staffId) {
    return this.httpClient.get(`${this.API_URL}/staff/${staffId}`);
  }

  getAllRequestsToApprove() {
    return this.httpClient.get(`${this.API_URL}/staff`);
  }

  updateLeave(staffId, requests: any) {
    return this.httpClient.post(`${this.API_URL}/leave/update/${staffId}`, requests);
  }

  getBalance(staffEmail) {
    return this.httpClient.get(`${this.API_URL}/staff/${staffEmail}`);
  }

  postToLeave(staffId, form) {
    return this.httpClient.post(`${this.API_URL}/leave/${staffId}`, form);
  }

}
