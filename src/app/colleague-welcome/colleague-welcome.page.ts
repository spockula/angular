import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-colleague-welcome',
  templateUrl: './colleague-welcome.page.html',
  styleUrls: ['./colleague-welcome.page.scss'],
})
export class ColleagueWelcomePage implements OnInit {

  staff: any;
  staffId: any;
  staffEmail: any;
  userData: string;
  user: any;
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  location: string;
  isWatching: boolean;
  loading: any;
  watchLocationUpdates: any;

  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  image: any;

  constructor(private staffService: StaffService,
    private nativeStorage: NativeStorage, public loadingController: LoadingController,
   private modalController: ModalController, private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,  private router: Router) { }

  ngOnInit() {
    // this.getProfilePix();
    this.getGeolocation();
    this.nativeStorage.getItem('colleagueStaffEmail')
    .then(
      data => {
          this.staffEmail = data;
          console.log('this is staff Email', this.staffEmail);
          this.getStaffDetails(this.staffEmail);
      }
    );
    this.nativeStorage.getItem('location')
    .then(
      data => {
          this.location = data;
      }
    );
  }


  public getStaffDetails(staffEmail) {
    console.log('this is staff Email', this.staffEmail);
    this.staffService.getStaffByEmail(staffEmail).subscribe((data: Array<object>) => {
      this.staff = data['data'][0];
      this.image = this.staff.profile_pix_url;
      console.log('this is staff', this.staff);
    }, err => {
      console.log(err);
    });

  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

   // Get current coordinates of device

   async getGeolocation() {
     await this.geolocation.getCurrentPosition().then((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.geoAccuracy = resp.coords.accuracy;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
     }).catch((error) => {
       alert('Error getting location' + JSON.stringify(error));
     });
  }

  // geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
    .then((result: NativeGeocoderResult[]) => {
      this.location = this.generateAddress(result[0]);
    })
    .catch((error: any) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  // Return Comma saperated address
  generateAddress(addressObj) {
      const obj = [];
      let address = '';
      // tslint:disable-next-line:forin
      for (const key in addressObj) {
        obj.push(addressObj[key]);
      }
      obj.reverse();
      for (const val in obj) {
        if (obj[val].length) {
        address += obj[val] + ', ';
        }
      }
    return address.slice(0, -2);
  }


  // Start location update watch
  watchLocation() {
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
    });
  }

  // Stop location update watch
  stopLocationWatch() {
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }

public openCheckin() {
  this.closeModal();
 this.router.navigate(['colleague-checkin']);
}

public openCheckOut() {
  this.closeModal();
 this.router.navigate(['colleague-checkout']);
}

}
