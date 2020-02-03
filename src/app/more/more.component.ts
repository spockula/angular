import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../services/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  fileData: File = null;
  previewUrl: any = null;
  logoPreviewUrl: any = null;
  fileUploadProgress: string = null;
  companyId: any;
  company: any;
  durationInSeconds: number;
  updatedLogo: any;

  constructor( private _snackBar: MatSnackBar, private companyService: CompanyService) { }

  ngOnInit() {
    if (localStorage.getItem('cu')) {
      this.companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
      console.log('this is companyId', this.companyId);
    }
    this.getLogo();
    this.companyService.getCompanyById().subscribe(csv => {
      this.company = csv['data'][0];
      console.log('this is company', this.company);
    });
  }


  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    if ( /\.(jpe?g|png)$/i.test(this.fileData.name) === false  ) {
      alert('please choose an Image with JPG or PNG  extension!');
      fileInput.srcElement.value = null;
    } else {
    this.preview();
  }
}

  updateFileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    if ( /\.(jpe?g|png)$/i.test(this.fileData.name) === false  ) {
      alert('please choose an Image with JPG or PNG  extension!');
      fileInput.srcElement.value = null;
    } else {
    this.updatepreview();
  }
}

  updatepreview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.logoPreviewUrl = reader.result;
    };
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }

  onSubmit() {
      const formData = new FormData();
      formData.append('logo', this.fileData);
      formData.append('company_email', this.company['email'] );
      formData.append('companyId', this.companyId);
     this.companyService.logoUpload(formData)
        .subscribe(res => {
          console.log(res);
          this.openSnackBar();
        });
  }

  update() {
    const formData = new FormData();
      formData.append('logo', this.fileData);
     this.companyService.updateLogo(this.companyId, formData)
        .subscribe(res => {
          console.log(res);
         this.openSnackBar();
        });

  }

  openSnackBar() {
    this._snackBar.open('Successfully uploaded Logo', 'uploaded', {
      duration: this.durationInSeconds * 1000
    });
  }

  getLogo() {
    this.companyService.getLogo(this.companyId).subscribe(data => {
      console.log('this is uploaded logo', data);
      this.updatedLogo = data['data'][0]['logo_url'];
      console.log('this is uploaded logo', this.updatedLogo);
    });
  }

}
