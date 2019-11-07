import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffResolverService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.http.get('https://api.officepeopleapp.com/v1/branch').pipe(
      delay(2000)
    );
  }
}
