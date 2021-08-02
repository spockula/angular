import { Component, OnInit } from '@angular/core';
import { AssetsService } from './../services/assets.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  orders: any;
  assets: any;
  approved: any[];

  constructor(public assetService: AssetsService) { }

  ngOnInit(): void {
    this.getAllOrders();
    this.getAssets();
  }

  getAllOrders()  {
    this.assetService.showSpinner();
    this.assetService.allOrders().subscribe(data => {
      console.log('this is all orders', data);
      this.orders = data['data']['items'];
      this.assetService.stopSpinner();
    },
    err => {
        console.log(err);
        this.assetService.stopSpinner();
    },
    () => { }
    );
  }

  getAssets() {
    this.assetService.getAllAssets().subscribe(data => {
      this.assets = data['data']['items'];
      let init = []
      let second = []
      this.assets.forEach(element => {
        if (element.approved === 0 ) {
          init.push(element);
        } else if (element.approved === 1) {
          second.push(element);
        }
      });
      this.approved =  second ;
    },
    err => {
        console.log(err);
        this.assetService.stopSpinner();
    },
    () => {
      this.assetService.stopSpinner();
     }
    );
  }

}
