import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../services/login.service';
import { StaffService } from '../services/staff.service';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import {formatDate } from '@angular/common';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-colleague-checkin',
  templateUrl: './colleague-checkin.page.html',
  styleUrls: ['./colleague-checkin.page.scss'],
})
export class ColleagueCheckinPage implements OnInit {
  image: any = '';
  staffEmail: any;
  userData: string;
  user: any;
  staff: any;
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
  imageData: any;


  constructor( private camera: Camera,
    public alertController: AlertController,  private router: Router, private loginService: LoginService,
    private nativeStorage: NativeStorage, private staffService: StaffService, public loadingController: LoadingController,
    private geolocation: Geolocation, public toastCtrl: ToastController,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    this.getGeolocation();
    this.nativeStorage.getItem('colleagueStaffEmail')
    .then(
      data => {
          this.staffEmail = data;
          console.log('this is staff Email', data);
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
   this.nativeStorage.setItem('location', this.location);
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

  public async getStaffDetails(staffEmail) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    console.log('this is another staff', this.staffEmail);
    this.staffService.getStaffByEmail(staffEmail).subscribe((data: Array<object>) => {
      this.staff = data['data'][0];
      console.log('this is staff', this.staff);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  public async takePhoto() {
    const options: CameraOptions = {
      quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.CAMERA,
        mediaType: this.camera.MediaType.PICTURE,
        cameraDirection: this.camera.Direction.FRONT,
        correctOrientation: true,
        targetWidth: 200,
        targetHeight: 270
    };

    await this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     // alert(imageData)
     this.imageData = 'data:image/jpeg;base64,' + imageData;
     this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     alert('error ' + JSON.stringify(err));
    }
    );
    this.uploadPhoto();
  }

  public async uploadPhoto() {
    const loading = await this.loadingController.create({
      message: 'Uploading Image and completing check-In...',
      spinner: 'dots',
      translucent: true
    });
    await loading.present();
    const today = new Date();
    const jstoday = formatDate(today, 'dd-MM-yyyy', 'en-US');
    const time = formatDate(today, 'hh:mm:ss a', 'en-US');

    console.log('this is date', jstoday);
    console.log('this is date', time);
    this.staffService.checkIn({
      images: this.imageData,
      location: this.location,
      checkIn: true,
      date: jstoday,
      time: time,
      staffId: this.staff.staffId,
      branchId: this.staff.branchId,
      departmentId: this.staff.departmentId,
      companyId: this.staff.companyId,
      email: this.staffEmail
    }).subscribe(data => {
     console.log('this is form value', data);
     loading.dismiss();
     this.router.navigate(['success-check-modal']);
    },  error => {
      loading.dismiss();
      this.showToast();
    });
}

    async showToast() {
      const toast = this.toastCtrl.create({
        message: 'We are so sorry! this is our fault, Check-In Failed. send us a message to resolve this ',
        duration: 3000,
        position: 'middle'
      });

      (await toast).present();
    }


}
