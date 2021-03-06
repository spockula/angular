import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopComponent } from './shared/top/top.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';


import { routing } from './app.routing';
import { AuthGuard } from './_guards';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './services/alert.service';
import { DepartmentComponent } from './department/department.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { BirthdayComponent } from './birthday/birthday.component';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CmrLoginComponent } from './cmr-login/cmr-login.component';
import { CmrDashboardComponent } from './cmr-dashboard/cmr-dashboard.component';
import { CmrSidebarComponent } from './shared/cmr-sidebar/cmr-sidebar.component';
import { LeaveComponent } from './leave/leave.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { CmrBranchesComponent } from './cmr-branches/cmr-branches.component';
import { CmrDepartmentComponent } from './cmr-department/cmr-department.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { PolicyComponent } from './policy/policy.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { MoreComponent } from './more/more.component';
import { CheckComponent } from './check/check.component';
import { UpdateComponent } from './update/update.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { CmrStaffComponent } from './cmr-staff /cmr-staff.component';
import { MatSelectModule, MatDialog} from '@angular/material';
import { StaffModalComponent } from './staff-modal/staff-modal.component';
import { CmrStaffModalComponent } from './cmr-staff-modal/cmr-staff-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopComponent,
    SidebarComponent,
    HomeComponent,
    CompanyComponent,
    BranchComponent,
    LoginComponent,
    NotFoundComponent,
    AlertComponent,
    DepartmentComponent,
    AnnouncementComponent,
    AnniversaryComponent,
    BirthdayComponent,
    CmrLoginComponent,
    CmrDashboardComponent,
    CmrSidebarComponent,
    LeaveComponent,
    AdminRegisterComponent,
    CompanyRegisterComponent,
    CmrStaffComponent,
    CmrBranchesComponent,
    CmrDepartmentComponent,
    CreateStaffComponent,
    PolicyComponent,
    FileSelectDirective,
    MoreComponent,
    CheckComponent,
    UpdateComponent,
    ResetPasswordComponent,
    WelcomeComponent,
    RequestPasswordComponent,
    StaffModalComponent,
    CmrStaffModalComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule, BrowserAnimationsModule,
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatSelectModule, MatInputModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialog,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AlertService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
