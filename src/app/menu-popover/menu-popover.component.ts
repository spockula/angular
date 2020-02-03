import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-menu-popover',
  templateUrl: './menu-popover.component.html',
  styleUrls: ['./menu-popover.component.scss'],
})
export class MenuPopoverComponent implements OnInit {

  constructor(private router: Router, private nativeStorage: NativeStorage) { }

  ngOnInit() { }

  logout() {
    this.nativeStorage.remove('user').then((resp) => {

    }).catch(() => {

    });
    this.router.navigate(['/login']);
  }

}
