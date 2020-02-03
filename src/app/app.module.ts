import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TermsConditionPageModule } from './terms-condition/terms-condition.module';
import { MenuPopoverComponent } from './menu-popover/menu-popover.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpMDModule } from './op-md/op-md.module';
import { File } from '@ionic-native/file/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MyHammerGestureConfig } from './services/hammer.config.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { PdfModalPage } from './pdf-modal/pdf-modal.page';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, MenuPopoverComponent, PdfModalPage],
  entryComponents: [MenuPopoverComponent, PdfModalPage],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, LoginPageModule, RegisterPageModule,
    TermsConditionPageModule, IonicModule.forRoot(),
    AppRoutingModule, PdfViewerModule, HttpClientModule, TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }), FormsModule, BrowserAnimationsModule, OpMDModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    Camera,
    File,
    // tslint:disable-next-line: deprecation
    FileTransfer,
    FileOpener,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  },
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
