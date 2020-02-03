import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  API_URL  = environment.apiUrl;
  selectedBranch: any;

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getBranches() {
    const companyId  =  JSON.stringify(this.loginService.userData['data']['message']['data']['companyId']);
    const noQuotes = companyId.split('"').join('');
    return this.httpClient.get(`${this.API_URL}/branch/${noQuotes}/company`);
  }

  getBranchById(branchId) {
    return  this.httpClient.get(`${this.API_URL}/branch/${branchId}`);
  }

  createBranch(branch) {
    return  this.httpClient.post(`${this.API_URL}/branch/`, branch);
}

getCompanyBranches(companyId) {
  return this.httpClient.get(`${this.API_URL}/branch/${companyId}/company`);
}

}
