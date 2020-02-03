import { Component, OnInit } from '@angular/core';
import { BranchService } from './../../services/branch.service';
import { Branch } from './Branch';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
})
export class BranchesComponent implements OnInit {

  branches: Array<object> = [];
  branch = new Branch();
  searchTerm: string;
  isDataAvail = false;

  constructor(private branchService: BranchService,  private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
    this.getBranches();
  }

  public async getBranches() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.branchService.getBranches().subscribe((data: Array<object>) => {
      this.branches = data['data'];
      console.log(data);
      loading.dismiss();
      return this.branches;
    }, err => {
      console.log(err);
        loading.dismiss();
    });
  }

  public filterList(searchbar) {
    console.log('Just changed => ', searchbar.detail.value);
    if (searchbar.detail.value) {
      this.branches = this.branches.filter(function (branch) {
        console.log(branch);
        return branch['branchName'].toLowerCase().includes(searchbar.detail.value.toLowerCase());
      });
    } else {
      this.isDataAvail = false;
    }

    if (this.branches.length > 0 || searchbar.detail.value === '') {
      this.isDataAvail = false;
    } else {
      this.isDataAvail = true;
    }
  }


  goToBranchDetails(branch) {
    console.log(branch);
    this.branchService.selectedBranch = branch;
    this.router.navigate(['branch-details'], branch);
  }

}
