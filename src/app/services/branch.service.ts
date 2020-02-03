import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  API_URL  = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getBranches() {
    return  this.httpClient.get(`${this.API_URL}/branch`);
  }

  getCompanyBranches() {
    let companyId = '';
    if (localStorage.getItem('cu')) {
      companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
    return  this.httpClient.get(`${this.API_URL}/branch/${companyId}/company`);
  }

  createBranch(branch) {
    return  this.httpClient.post(`${this.API_URL}/branch/`, branch);
}

// getCompanyBranches(companyId) {
//   return this.httpClient.get(`${this.API_URL}/branch/${companyId}/company`);
// }

}
