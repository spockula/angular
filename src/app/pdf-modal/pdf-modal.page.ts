import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController  } from '@ionic/angular';

@Component({
  selector: 'app-pdf-modal',
  templateUrl: './pdf-modal.page.html',
  styleUrls: ['./pdf-modal.page.scss'],
})
export class PdfModalPage implements OnInit {
  @Input() policy: string;
  display: any;

  constructor(public navParams: NavParams,
    public modalCtrl: ModalController) {
    }

  ngOnInit() {
    this.openPdf();
  }

  public openPdf() {
    this.display = this.navParams.get('policy');
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
