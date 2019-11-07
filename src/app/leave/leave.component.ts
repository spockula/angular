import { Component, OnInit} from '@angular/core';
import { LeaveService } from './../services/leave.service';
import { Leave } from './Leave';
import { AlertService } from '../services/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  currentUser: Object;
  leaves: any;
  leave = new Leave();
  companyId: any;
  leaveArray = [];
  display: any;
  constructor(private leaveService: LeaveService, private alertService: AlertService) { }



  ngOnInit() {
    this.companyId = '';
    if (localStorage.getItem('cu')) {
      this.currentUser = JSON.parse(localStorage.getItem('cu'));
      this.companyId = this.currentUser['companyId'];
      this.getLeaves();
    }
  }


public getLeaves() {
  this.leaveService.getLeave(this.companyId).subscribe((data: Array<object>) => {
    const real = data['message'];
    console.log('this is data', real);
    const trial = [];
    for (let count = 0; count < real.length; count++) {
    trial.push(real[count]);
  }
  const leavey = trial.map(el => el['components']);
  this.leaves = leavey[0];
  console.log('this is leaves', leavey);
    // this.leaves = Object.keys(real);
  });
}

addLeave(value) {
  if (value !== '') {
  this.leaveArray.push(value);
  console.log('this is leave array', this.leaveArray);
  const trial = [];
    for (let count = 0; count < this.leaveArray.length; count++) {
    trial.push(this.leaveArray[count]);
  }
  this.display = trial;
      console.log('this is display', this.display);
  } else {
    alert('Please fill in the Fields **');
  }
}

public createLeave(leaveForm: NgForm) {
  const components = this.leaveArray;
  // leaveForm.resetForm();
  this.leaveService.createLeave(this.companyId, {
    'components': components
  }).subscribe((response) => {
    if (response) {
      this.alertService.success('Leave created Successfully', true);
    } else {
      this.alertService.error('Something went wrong: Leave Not Created', true);
    }
    this.leaveService.updateLeave(this.companyId).subscribe((update) => {
      console.log('this is update', update);
    });
    console.log('this is response', response);
    this.leave = new Leave();
    this.getLeaves();
  });
}


}
