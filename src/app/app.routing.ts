import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_guards';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { StaffComponent } from './staff/staff.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentComponent } from './department/department.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { StaffResolverService } from './staff-resolver.service';
import { CmrDashboardComponent } from './cmr-dashboard/cmr-dashboard.component';
import { CmrLoginComponent } from './cmr-login/cmr-login.component';
import { LeaveComponent } from './leave/leave.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { CmrStaffComponent } from './cmr-staff/cmr-staff.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'branch', component: BranchComponent , canActivate: [AuthGuard]},
  { path: 'company', component: CompanyComponent , canActivate: [AuthGuard]},
  { path: 'staff', component: StaffComponent , canActivate: [AuthGuard] , resolve: {branches:StaffResolverService}},
  { path: 'department', component: DepartmentComponent , canActivate: [AuthGuard] },
  { path: 'announcement', component: AnnouncementComponent , canActivate: [AuthGuard] },
  { path: 'anniversary', component: AnniversaryComponent , canActivate: [AuthGuard] },
  { path: 'birthday', component: BirthdayComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cmrDashboard', component: CmrDashboardComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'cmrLogin', component: CmrLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'companyReg' , component: CompanyRegisterComponent },
  { path: 'cmrStaff', component: CmrStaffComponent },
  // otherwise redirect to home
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
