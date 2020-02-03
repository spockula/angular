import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { User } from './User';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public language: string;
  public Login: string;
  public password: string;
  public email: string;

  constructor(private loginService: LoginService, private router: Router,
    public loadingController: LoadingController, public toastController: ToastController,
    private nativeStorage: NativeStorage, private _translate: TranslateService) { }

  data: any;
  user = new User();

  ngOnInit() {
    this.nativeStorage.getItem('user')
      .then(
        data => {
          // this.userData = JSON.stringify(data);
          // if (this.userData.loginData.persist === true) {
            this.router.navigate(['dashboard']);
         // }
        },
        error => {
          console.error(error);
          // this.userData = error;
          this.router.navigate(['login']);
        }
      );
  }

  ionViewDidEnter(): void {
    // initialize
    this._initTranslate();
  }

  public async doLogin(loginData) {
    console.log(loginData);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();

    this.loginService.login(loginData).subscribe((data: Array<object>) => {
      if (data['error'] === false && data['errorCode'] === 200) {
        console.log('login data ----', data);
        this.loginService.userData = data;
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['login']);
      }

      console.log('checkkkkkkk', data['message']['data']['companyId']);

      // this.nativeStorage.setItem('companyId', (data['message']['data']['companyId']).toString())
      // .then(
      //   () => console.log('Company ID stored.'),
      //   error => console.error('Error storing item', error)
      // );

      const _allData = {data, loginData };

      // if (loginData.persist === true) {
        console.log('I can persis this.', _allData);

        this.nativeStorage.setItem('user', _allData)
          .then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
          );
      // }
      loading.dismiss();

    }, async (err) => {
      console.log(err);
      const toast = await this.toastController.create({
        message: err.error.message,
        showCloseButton: true,
        position: 'top',
        closeButtonText: 'Ok',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      loading.dismiss();
    });
  }

  async presentToastWithOptions(message) {
    const toast = await this.toastController.create({
      message,
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Ok',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }


  // Translation logics

  _initTranslate() {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('en');

    if (this._translate.getBrowserLang() !== undefined) {
      this.language = this._translate.getBrowserLang();
      console.log('browser language is', this._translate.getBrowserLang());
    } else {
      // Set your language here
      this.language = 'en';
    }

    this._translateLanguage();
  }




  public changeLanguage(): void {
    this._translateLanguage();
  }

  _translateLanguage(): void {
    console.log('language', this.language);
    this._translate.use(this.language);
    this._initialiseTranslation();
  }

  _initialiseTranslation(): void {
    // Get data with key 'login'
    this._translate.get('login').subscribe((res: string) => {
      console.log(res);
      this.Login = res;
    });

    this._translate.get('password').subscribe((res: string) => {
      console.log(res);
      this.password = res;
    });

    this._translate.get('email').subscribe((res: string) => {
      console.log(res);
      this.email = res;
    });
    // Get data with key 'description'
    // this._translate.get('description').subscribe((res: string) => {
    //   console.log(res);
    //   this.description = res;
    // });
    // Get data with key 'TITLE_2' and `value` variable as 'John'
    // this._translate.get('TITLE_2', { value: 'John' }).subscribe((res: string) => {
    //   console.log(res);
    //   this.title_2 = res;
    // });
    // Get data with nested key 'data.name' and `name_value` variable as 'Marissa Mayer'
    // this._translate.get('data.name', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
    //   console.log(res);
    //   this.name = res;
    // });
  }

}
