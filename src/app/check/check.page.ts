import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { CheckModalPage } from '../check-modal/check-modal.page';
import { CheckOutModalPage } from '../check-out-modal/check-out-modal.page';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../services/login.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';



@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

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
  data: any;

  constructor(private staffService: StaffService,  private loginService: LoginService,
    private nativeStorage: NativeStorage, public loadingController: LoadingController,
   private modalController: ModalController, private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,  private router: Router) { }

    ngOnInit() {
    this.getStaffDetails();
    }

   public async getStaffDetails() {

    this.nativeStorage.getItem('user')
    .then(
      data => {
        this.loginService.userData = data;
        this.userData = JSON.stringify(data);
        this.data = data;
        console.log('this is data', data);
        if (data.loginData) {
          this.user = data.loginData.email;
          this.staffEmail = this.user;
      
      console.log('this is staffEmail', this.staffEmail);

    this.staffService.getStaffByEmail(this.staffEmail).subscribe((data: Array<object>) => {
      this.staff = data['data'][0];
      this.image = this.staff.profile_pix_url;
      this.getGeolocation();
      console.log('this is staff', this.staff);

      });
    } 
  },
    error => {
      console.error(error);
      this.userData = error;
       this.router.navigate(['home']);
    });
  }


    doRefresh(event) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

     //Get current coordinates of device

     async getGeolocation() {
       await this.geolocation.getCurrentPosition().then((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.geoAccuracy = resp.coords.accuracy; 
        this.getGeoencoder(this.geoLatitude,this.geoLongitude);
       }).catch((error) => {
         alert('Error getting location'+ JSON.stringify(error));
       });
    }
  
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude,longitude){
      this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.location = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location'+ JSON.stringify(error));
      });
    }
  
    //Return Comma saperated address
    generateAddress(addressObj){
        let obj = [];
        let address = "";
        for (let key in addressObj) {
          obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
          if(obj[val].length)
          address += obj[val]+', ';
        }
      return address.slice(0, -2);
    }
  
  
    //Start location update watch
    watchLocation(){
      this.isWatching = true;
      this.watchLocationUpdates = this.geolocation.watchPosition();
      this.watchLocationUpdates.subscribe((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.getGeoencoder(this.geoLatitude,this.geoLongitude);
      });
    }
  
    //Stop location update watch
    stopLocationWatch(){
      this.isWatching = false;
      this.watchLocationUpdates.unsubscribe();
    }

  async openCheckinModal() {
    const modal = await this.modalController.create({
      component: CheckModalPage
    });
    return await modal.present();
  }

  async openCheckOutModal() {
    const modal = await this.modalController.create({
      component: CheckOutModalPage
    });
    return await modal.present();
  }

  async openColleagueModal() {
    this.router.navigate(['colleague-modal']);
  }

}
