import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  API_URL = environment.apiUrl;
  selectedAnnouncement: any;

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getAnnouncements() {
    const companyId  =  JSON.stringify(this.loginService.userData['data']['message']['data']['companyId']);
    const noQuotes = companyId.split('"').join('');
    return this.httpClient.get(`${this.API_URL}/announcement/${noQuotes}/company`);
  }

  getCompanyAnnouncements(companyId) {
    return this.httpClient.get(`${this.API_URL}/announcement/${companyId}/company`);
  }

}
