import { Component, OnInit } from '@angular/core';
import { StaffService } from './../services/staff.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-staff-modal',
  templateUrl: './staff-modal.component.html',
  styleUrls: ['./staff-modal.component.css']
})
export class StaffModalComponent implements OnInit {
  durationInSeconds = 5;
  currentUser: any;
  selectedFile: File;
  imagePreview: any;
  companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
  savedData: any;
  staffs: any;

  constructor(private _snackBar: MatSnackBar, private staffService: StaffService,
    private ngxService: NgxUiLoaderService, private httpClient: HttpClient) { }

  ngOnInit() {
    if (localStorage.getItem('cu')) {
      this.companyId = JSON.parse(localStorage.getItem('cu'))['companyId'];
    }
  }

        uploadFile(event) {
          this.selectedFile = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(this.selectedFile);
          const files = new FormData();
          files.append('files', this.selectedFile, this.selectedFile.name);
          console.log('this is files', files);
          this.staffService.submitCsv(this.companyId, files).subscribe(csv => {
            console.log('this is uploaded data', csv);
            if (csv['data']['errorFromSaving']) {
            this.unsavedSnackBar();
            } else {
              this.openSnackBar();
            }
          } , err => {
            console.log('this is error', err['error']['message']);
            alert(err['error']['message']);
            this.ngxService.stop();
          });
          }

        chooseFile(event) {
          this.selectedFile = event.target.files[0];
          const file = this.selectedFile;
        if (/\.(csv|xlsx)$/i.test(this.selectedFile.name) === false  ) {
            alert('please choose a file in CSV or Excel format!');
            event.srcElement.value = null;
        } else {
          let workBook = null;
          let jsonData = null;
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = (<any>e.target).result;
            workBook = XLSX.read(data, { type: 'binary' });
            jsonData = workBook.SheetNames.reduce((initial, name) => {
              const sheet = workBook.Sheets[name];
              initial[name] = XLSX.utils.sheet_to_json(sheet);
              return initial;
            }, {});
            this.savedData = jsonData;
        };
        reader.readAsBinaryString(this.selectedFile);
        }
      }

      openSnackBar() {
        this._snackBar.open('Successfully uploaded Staff', 'uploaded', {
          duration: this.durationInSeconds * 1000
        });
      }

      unsavedSnackBar() {
        // tslint:disable-next-line:quotemark
        // tslint:disable-next-line:max-line-length
        this._snackBar.open('Some staff could not be saved. Use the preview option to see staff without required data and make necessary corrections', 'Error saving some staff', {
          duration: this.durationInSeconds * 3000
        });
      }

      downloadFile() {
        // tslint:disable-next-line:max-line-length
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTIngBeZzWRtWn81mzxomibZjW73zo9QX-qVrJIzeJOt7Xj0r0swIuqaCelKFDoMbs6Rkh1wT2VozY1/pub?output=xlsx';
          this.httpClient.get(url, {responseType: 'arraybuffer'})
          .subscribe((res) => {
              this.writeContents(res, 'staff.xlsx', 'xlsx/excel'); // file extension
          });
      }

      writeContents(content, fileName, contentType) {
          const a = document.createElement('a');
          const file = new Blob([content], {type: contentType});
          a.href = URL.createObjectURL(file);
          a.download = fileName;
          a.click();
        }

}
