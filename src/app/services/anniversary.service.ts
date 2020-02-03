import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AnniversaryService {
  API_URL  = environment.apiUrl;
  selectedAnniversary: any;

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getAnniversaries() {
    const companyId  =  JSON.stringify(this.loginService.userData['data']['message']['data']['companyId']);
    // tslint:disable-next-line:prefer-const
    let noQuotes = companyId.split('"').join('');
    return this.httpClient.get(`${this.API_URL}/anniversary/${noQuotes}/company`);
  }

getCompanyAnniversaries(companyId) {
  return this.httpClient.get(`${this.API_URL}/anniversary/${companyId}/company`);
}


}
