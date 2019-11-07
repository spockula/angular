import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnniversaryService {

  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAnniversaries() {
    return this.httpClient.get(`${this.API_URL}/anniversary`);
  }

  createAnniversary(anniversary) {
    let companyId = '';
    if (localStorage.getItem('cu')) {
      companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
    anniversary['companyId'] = companyId;
    return this.httpClient.post(`${this.API_URL}/anniversary/`, anniversary);
  }

  getCompanyAnniversary() {
    let companyId = '';
    if (localStorage.getItem('cu')) {
      companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
    return this.httpClient.get(`${this.API_URL}/anniversary/${companyId}/company`);
  }

}
