import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  API_URL = environment.apiUrl;
  testUrl = 'https://peopleappapis.herokuapp.com/v1/';
  currentUser: Object;

  constructor(private httpClient: HttpClient) { }

  createLeave(companyId, leaveForm: any) {
    return  this.httpClient.post(`${this.testUrl}leave/${companyId}`, leaveForm);

  }

getLeave(companyId) {
return this.httpClient.get(`${this.testUrl}leave/all/${companyId}`);
}

updateLeave(companyId) {
  return this.httpClient.get(`${this.testUrl}leave/all/staff/${companyId}`);
}

}
