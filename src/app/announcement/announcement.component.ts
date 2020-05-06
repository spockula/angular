import { Component, OnInit, ElementRef } from '@angular/core';
import { AnnouncementService } from './../services/announcement.service';
import { CompanyService } from './../services/company.service';
import { Announcement } from './Announcement';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
})
export class AnnouncementComponent implements OnInit {

  announcements: Array<object> = [];
  companies: Array<object> = [];
  announcement = new Announcement();
  searchTerm: string;
  isDataAvail = false;
  form: FormGroup;
  DOBstartDate = new Date(1990, 0, 1);
  DateJoinedStartDate = new Date(2000, 0, 1);
  durationInSeconds: number;
  companyId: any;
  title: any;
  date: any;
  location: any;
  images: any;
  time: any;


  constructor(private announcementService: AnnouncementService, private _snackBar: MatSnackBar,
    private host: ElementRef<HTMLInputElement>, private companyService: CompanyService, public fb: FormBuilder) {
      this.form = fb.group({
        'companyId': this.companyId,
        'title': this.title,
        'date': this.date,
        'location': this.location,
        'images': this.images,
        'time': this.time
    });
     }

  ngOnInit() {
    this.getAllAnnouncements();
    this.getCompanies();
  }

  public async getAllAnnouncements() {
    this.announcementService.getAnnouncements().subscribe((data: Array<object>) => {
      this.announcements = data['data'];
      console.log('=>', this.announcements);
    }, err => {
      console.log(err);
    });
  }


  public getCompanies() {
    this.companyService.getCompanies().subscribe((data: Array<object>) => {
      this.companies = data['data'];
      console.log(this.companies);
    });
  }

  public createAnnouncement() {
    const formData: any = new FormData();
    this.announcement.status = 'active';
    formData.append('title', this.form.get('title').value);
    formData.append('location', this.form.get('location').value);
    formData.append('date', this.form.get('date').value);
    formData.append('time', this.form.get('time').value);
    formData.append('images', this.form.get('images').value);
    formData.append('companyId', this.form.get('companyId').value);
    formData.append('status', this.announcement.status);
    this.announcement = formData.value;
    this.announcementService.createAnnouncement(formData).subscribe((response) => {
      console.log(response);
     this.openSnackBar();
      this.announcement = new Announcement();
      this.getAllAnnouncements();
    }, err => {
     this.closeSnackBar();
    });
  }

  closeSnackBar() {
    this._snackBar.open('Something went wrong! We could not create New Announcement ', "Error", {
      duration: this.durationInSeconds * 1000
    })
  }

  openSnackBar() {
    this._snackBar.open('Successfully Created New Announcement', "Created", {
      duration: this.durationInSeconds * 1000
    })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    if ( /\.(jpe?g|gif)$/i.test(file.name) === false  ) {
      alert('please choose an Image with JPG extension!');
      event.srcElement.value = null;
    } else {
      this.form.patchValue({
      images: file
    });
    this.form.get('images').updateValueAndValidity();
    }
  }

}
