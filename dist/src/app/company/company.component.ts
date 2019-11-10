import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from './../services/company.service';
import { Company } from './Company';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Array<object> = [];
  company = new Company();

  constructor(private companyService: CompanyService, private alertService: AlertService) { }

  ngOnInit() {
    this.getCompanies();
  }


  public getCompanies() {
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      this.companies = data['data'];
      console.log(data);
    });
  }

  public createCompany(coy: NgForm) {
    console.log(coy.value);
    this.company = coy.value;
    this.companyService.createCompany(coy.value).subscribe((response) => {
      if (response) {
        this.alertService.success('Company created Successfully', true);
      } else {
        this.alertService.error('Something went wrong: Company Not Created', true);
      }
      console.log('new company', response);
      this.company = new Company();
      this.getCompanies();
    });
  }

}
