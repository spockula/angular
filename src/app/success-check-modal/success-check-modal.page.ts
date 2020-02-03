import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-success-check-modal',
  templateUrl: './success-check-modal.page.html',
  styleUrls: ['./success-check-modal.page.scss'],
})
export class SuccessCheckModalPage implements OnInit {
  location: Promise<any>;
  dateNow: string;

  constructor(public nativeStorage: NativeStorage, public router: Router) { }

  ngOnInit() {
    this.nativeStorage.getItem('location')
    .then(
      data => {
        this.location = data; });
        const today = new Date();
   this.dateNow = formatDate(today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
  }

  public ok() {
    this.router.navigate(['check']);
  }

}
