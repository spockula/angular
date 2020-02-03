import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  API_URL  = environment.apiUrl;
  selectedDepartment: any;

  constructor(private httpClient: HttpClient, private nativeStorage: NativeStorage, private loginService: LoginService) { }

   getDepartments() {
    const companyId  =  JSON.stringify(this.loginService.userData['data']['message']['data']['companyId']);
    const noQuotes = companyId.split('"').join('');
    return this.httpClient.get(`${this.API_URL}/department/${noQuotes}/company`);

  }

  getDepartmentById(departmentId) {
    return  this.httpClient.get(`${this.API_URL}/department/${departmentId}`)
  }

  createDepartment(department) {
    return  this.httpClient.post(`${this.API_URL}/department/`, department);
}

getCompanyDepartments(companyId) {
  const noQuotes = companyId.split('"').join('');
// http://api.officepeople.com.ng/v1/department/COY-63F5A/company
  return this.httpClient.get(`${this.API_URL}/department/` + noQuotes + '/company');
}
}
