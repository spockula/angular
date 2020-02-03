import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  API_URL  = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAnnouncements() {
    return  this.httpClient.get(`${this.API_URL}/announcement`);
  }

  createAnnouncement(form) {
    return  this.httpClient.post(`${this.API_URL}/announcement`, form);
}

getCompanyAnnouncements() {
  let companyId = '';
  if (localStorage.getItem('cu')) {
    companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
  }
  return this.httpClient.get(`${this.API_URL}/announcement/${companyId}/company`);
}

}
