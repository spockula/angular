import { Component, OnInit } from '@angular/core';
import { AnniversaryService } from './../services/anniversary.service';
import { CompanyService } from './../services/company.service';
import { Anniversary } from './Anniversary';
import { NgForm } from '@angular/forms';
import { BranchService } from '../services/branch.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit {

  anniversaries: Array<object> = [];
  companies: Array<object> = [];
  branches: Array<object> = [];
  anniversary = new Anniversary();
  searchTerm: string;
  isDataAvail = false;

  constructor(private anniversaryService: AnniversaryService,
    private companyService: CompanyService, private branchService: BranchService) { }

  ngOnInit() {
    this.getAllAnniversaries();
    this.getCompanies();
    this.getBranches();
  }

  public async getAllAnniversaries() {
    this.anniversaryService.getCompanyAnniversary().subscribe((data: Array<object>) => {
      this.anniversaries = data['data'];
      console.log('=>', data);
      return this.anniversaries;
    }, err => {
      console.log(err);
    });
  }


  public getCompanies() {
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      this.companies = data['data'];
      console.log(data);
    });
  }

    public getBranches() {
    this.branchService.getBranches().subscribe((data: Array<object>) => {
      this.branches = data;
      console.log(data);
    });
  }

  public createAnniversary(anniversary: NgForm) {
    console.log(anniversary.value);
    this.anniversary = anniversary.value;
    this.anniversaryService.createAnniversary(this.anniversary).subscribe((response) => {
      console.log(response);
      this.anniversary = new Anniversary();
      this.getAllAnniversaries();
    });
  }

}
