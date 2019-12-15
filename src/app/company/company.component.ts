import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from './../services/company.service';
import { Company } from './Company';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Array<object> = [];
  company = new Company();
  durationInSeconds: number;

  constructor(private companyService: CompanyService, private _snackBar: MatSnackBar) { }

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
        this.openSnackBar();
      } else {
        this.closeSnackBar();
      }
      console.log('new company', response);
      this.company = new Company();
      this.getCompanies();
    });
  }

  openSnackBar() {
    this._snackBar.open("Successfully Created New Company", "Created", {
      duration: this.durationInSeconds * 1000
    })
  }

  closeSnackBar() {
    this._snackBar.open("Something went wrong! We could not create New company", "Error", {
      duration: this.durationInSeconds * 1000
    })
  }

}
