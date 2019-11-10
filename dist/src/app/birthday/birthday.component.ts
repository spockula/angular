import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../services/birthday.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  birthdays: Array<object> = [];

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit() {
    this.getAllAnniversaries();
  }

  public async getAllAnniversaries() {
    this.birthdayService.getCompanyBirthdays().subscribe((data: Array<object>) => {
      this.birthdays = data['data'];
      console.log('=>', this.birthdays);
      //return this.birthdays;
    }, err => {
      console.log(err);
    });
  }

}
