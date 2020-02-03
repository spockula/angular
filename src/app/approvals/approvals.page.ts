import { Department } from './../shared/departments/Department';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LeaveService } from '../services/leave.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StaffService } from '../services/staff.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../services/login.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.page.html',
  styleUrls: ['./approvals.page.scss'],
})
    export class ApprovalsPage implements OnInit {
  requests: any;
  pendings: any;
  staff: any;
  staffEmail: any;
  userData: string;
  user: any;
  leaveType: any;
  leaveReason: any;
  startDate: any;
  endDate: any;
  staffId: any;

      constructor(private leaveService: LeaveService, public alerCtrl: AlertController,
        private staffService: StaffService, private loginService: LoginService, public toastCtrl: ToastController,
        private nativeStorage: NativeStorage, private router: Router, private httpClient: HttpClient) {

      }
  ngOnInit() {
this.getRequests();
  }

  public async getRequests() {
    this.nativeStorage.getItem('user')
    .then(
      data => {
        this.loginService.userData = data;
        this.userData = JSON.stringify(data);
        if (data.loginData) {
          this.user = data.loginData.email;
          this.staffEmail = this.user;
          this.staffService.getStaffByEmail(this.staffEmail).subscribe(approve => {
            this.staff = approve['data'][0];
            console.log('this is staff', this.staff);
    if (this.staff.role_status === 'hr') {
       this.leaveService.getAllRequestsToApprove().subscribe(leave => {
        const allRequests = [];
        for (let count = 0; count < leave['data'].length; count++) {
          for ( let c = 0 ; c < leave['data'][count]['request'].length; c++) {
            allRequests.push(leave['data'][count]['request'][c]);
          }
        }
        this.requests = allRequests;
        for (let count = 0; count < this.requests.length; count++) {
          this.leaveType = (this.requests[count]['leaveType']);
          this.leaveReason = (this.requests[count]['leaveReason']);
          this.startDate = (this.requests[count]['startDate']);
          this.endDate = (this.requests[count]['endDate']);
        }
       }, error => {
            this.requests = 'No requests Yet';
           console.log(error);
         });
        } else if (this.staff.role_status === 'lineManger') {
          this.leaveService.getAllRequestsToApprove().subscribe(leave => {
            console.log('this is leave', leave);
           const allPending = [];
           for (let count = 0; count < leave['data'].length; count++) {
             for ( let c = 0 ; c < leave['data'][count]['pending_aprovals'].length; c++) {
               allPending.push(leave['data'][count]['pending_aprovals'][c]);
             }
           }
           this.pendings = allPending;
           for (let count = 0; count < this.pendings.length; count++) {
            this.leaveType = (this.pendings[count]['leaveType']);
            this.leaveReason = (this.pendings[count]['leaveReason']);
            this.startDate = (this.pendings[count]['startDate']);
            this.endDate = (this.pendings[count]['endDate']);
          }
          }, error => {
               this.pendings = 'No requests Yet';
            });
           } else {
             this.showToast();
             this.router.navigate(['dashboard']);
           }
      });
    }
      });
    }

  async doConfirm(i: any) {
    const confirm = this.alerCtrl.create({
      message: 'Do you want to approve this Leave Request?',
      buttons: [
          {
            text: 'No, Reject',
            handler: () => {
              console.log('Rejected');
            }
          },
        {
          text: 'Yes, Approve',
          handler: () => {
             this.staffService.getStaffByEmail(this.staffEmail).subscribe((data: Array<object>) => {
              this.staff = data['data'][0]; });
              this.staffId = this.staff.staffId;
            if (this.staff.role_status === 'hr') {
            this.leaveService.updateLeave(this.staffId, {
              leaveType: this.leaveType,
              leavereason: this.leaveReason,
              endDate: this.endDate,
              startDate: this.startDate,
              Email: this.staffEmail
            }).subscribe(data => {
            // console.log(data);
            });
            this.approveToast();
            this.requests.splice(i, 1);
          } else if (this.staff.role_status ===  'lineManger') {
            this.leaveService.updateLeave(this.staffId, {
              leaveType: this.leaveType,
              leavereason: this.leaveReason,
              endDate: this.endDate,
              startDate: this.startDate
            }).subscribe(data => {
             console.log('this is data', data);
            });
            this.approveToast();
            this.pendings.splice(i, 1);
          } else {
            this.showToast();
          }
          }
        }
      ]
    });
    (await confirm).present();
  }

  async showToast() {
    const toast = this.toastCtrl.create({
      message: 'You do not have permissions to view or approve leave requests',
      duration: 10000,
      position: 'middle'
    });

    (await toast).present();
  }

  async approveToast() {
    const toast = this.toastCtrl.create({
      message: 'Request Approved',
      duration: 6000,
      position: 'middle'
    });

    (await toast).present();
  }

}
