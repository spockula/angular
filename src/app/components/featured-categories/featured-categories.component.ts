
import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { AssetsService } from '../../services/assets.service';
import { demo } from 'src/app/interfaces';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedCategoriesComponent implements OnChanges {
  @Input() public msgFromParent: string;
  assets: any;
  audios: any;
  images: any;
  videos: any;
  error: any;
  demoItems: any;
  check: boolean;
  dynamicSlides = [
    {
      id: 1,
      src:'https://via.placeholder.com/600/92c952',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'https://via.placeholder.com/600/771796',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'https://via.placeholder.com/600/24f355',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'https://via.placeholder.com/600/d32776',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'https://via.placeholder.com/600/f66b97',
      alt:'Side 5',
      title:'Side 5'
    }
  ]
 

  constructor(public assetService: AssetsService) {
    
   }

   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: false
  }

  ngOnInit(): void {
   
  }

  ngOnChanges() {
    // this.check = true;
  
    this.demoItems = demo;
    console.log('this is demoItems', demo)
    // const artItems = document.getElementById('firstSection')
    // const audioItems = document.getElementById('secondSection')
    // audioItems.style.visibility = 'hidden';
    // if (this.msgFromParent === 'images') {
    //   audioItems.style.visibility = 'hidden';
    //   artItems.style.visibility = 'visible';
    //   // for (var i = 0; i < hiddenItems.length; i++) {
    //   //   var htmlObj = <HTMLElement> hiddenItems[i];
        
    //   // }
    // } 

    // if (this.msgFromParent === 'audios') {
    //   artItems.style.visibility = 'hidden';
    //   audioItems.style.visibility = 'visible';
    //   let imgStyle = document.getElementById('imgStyle')
    //   imgStyle.style.marginTop = '-291px'
      
    //   console.log('done it')
    //   // for (var i = 0; i < hiddenItems.length; i++) {
    //   //   var htmlObj = <HTMLElement> hiddenItems[i];
        
    //   // }
    // } 
    
  }

  getAssets() {
    this.assetService.showSpinner();
    this.assetService.getAllAssets().subscribe(data => {
      this.assets = data['data']['items'];
      this.assets.forEach(element => {
        if (element.media.length > 0 && element.hasActiveAuction === true ) {
          this.assetService.getAuctionInfo(element.tokenId, element.lastAuctionId).subscribe(res => {
            if (element.category === 'artwork') {
              const image = element.media.filter(x => {
                return x.mediaKey ==='image';
              })[0];
              const mp4 = element.media.filter(x => {
                return x.mediaKey ==='mp4';
              })[0];
              this.images.push({name: element.name, image: image, video: mp4, tokenId: element.tokenId,
                symbol: element.symbol, owner: element.owner, issuer: element.issuer, id: element.id, 
                dateIssued: element.dateIssued, sellNowPrice: res['data']['sellNowPrice'], highestBid:  res['data']['highestBid']})
            }
            if(element.category === 'musicRight') {
              const mp3 = element.media.filter(x => {
                return x.mediaKey ==='mp3';
              })[0];
              const image =  element.media.filter(x => {
                return x.mediaKey ==='image';
              })[0]; 
              this.audios.push({name: element.name, image: image, audio: mp3, tokenId: element.tokenId, 
                symbol: element.symbol, owner: element.owner, issuer: element.issuer, id: element.id, 
                dateIssued: element.dateIssued, sellNowPrice: res['data']['sellNowPrice'], highestBid:  res['data']['highestBid']})
            }
            if(element.category === 'movieRight') {
              const mp4 = element.media.filter(x => {
                return x.mediaKey ==='mp4';
              })[0];
              const image =  element.media.filter(x => {
                return x.mediaKey ==='image';
              })[0];   
              
              this.videos.push({name: element.name, image:image, video: mp4, tokenId: element.tokenId, 
                symbol: element.symbol, owner: element.owner, issuer: element.issuer, id: element.id, 
                dateIssued: element.dateIssued, sellNowPrice: res['data']['sellNowPrice'], highestBid:  res['data']['highestBid']})
            }
            // this.randomVideo = this.videos[(Math.random() * this.videos.length) | 0];
            // this.randomArt = this.images[(Math.random() * this.images.length) | 0];
            // this.randomMusic = this.audios[(Math.random() * this.audios.length) | 0];
            // this.randomAudio = this.domSanitizer.bypassSecurityTrustUrl(this.randomMusic.audio.media);

          })
          this.assetService.stopSpinner();
        }
      });
      this.assetService.stopSpinner();
    }, err => {
      this.assetService.stopSpinner();
      this.error = err.error.data.error;
    },
    () => { 
      this.assetService.stopSpinner();
    });
  }


}
