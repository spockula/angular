import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  updateStaffAbout(StaffId: any, about: any) {
    return this.httpClient.put(`${this.API_URL}/staff/${StaffId}`, { about });
  }

  updateStaffProfile(StaffId: any, profilePic: any) {
    return this.httpClient.put(`${this.API_URL}/staff/${StaffId}`, { profilePic });
  }

}
