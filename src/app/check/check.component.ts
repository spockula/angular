import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../services/company.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  companyId: any;
  checkin: any;
  checkoutStatus: boolean;
  checkOut: any;

  constructor(private companyService: CompanyService ) { }

  ngOnInit() {
    if (localStorage.getItem('cu')) {
      this.companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
      console.log('this is companyId', this.companyId);
      this.getCheckIn();
      this.getCheckOut();
    }
  }

  public async getCheckIn() {
    this.companyService.getCheckingByCompany(this.companyId, true).subscribe((data: Array<object>) => {
     this.checkin = data['data'];
     // let staffId = [];
     // for (let c of this.checkin) {
     // staffId = c.staffId;
      //console.log(staffId);
     //}
     console.log('=>', this.checkin);
    }, err => {
      console.log(err);
    });
  }


  public async getCheckOut() {
    this.companyService.getCheckingByCompany(this.companyId, false).subscribe((data: Array<object>) => {
      if (data){
        this.checkoutStatus = true;
        console.log(this.checkoutStatus);
    }
      this.checkOut = data['data'];
     console.log(this.checkOut);
     return this.checkOut;
    }, err => {
      console.log(err);
    });
  }


}
