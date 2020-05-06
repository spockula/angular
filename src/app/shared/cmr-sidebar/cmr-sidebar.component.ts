import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-cmr-sidebar',
  templateUrl: './cmr-sidebar.component.html',
  styleUrls: ['./cmr-sidebar.component.css']
})
export class CmrSidebarComponent implements OnInit {
  company: any;
  updatedLogo: any;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanyById().subscribe(csv => {
      this.company = csv['data'][0];
      console.log('this is company', this.company);
      this.getLogo();
  });
  }

  getLogo() {
    this.companyService.getLogo(this.company['companyId']).subscribe(data => {
      console.log('this is uploaded logo', data);
      this.updatedLogo = data['data'][0]['logo_url'];
      console.log('this is uploaded logo', this.updatedLogo);
    });
  }

}
