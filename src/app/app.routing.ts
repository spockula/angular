import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_guards';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentComponent } from './department/department.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { StaffResolverService } from './staff-resolver.service';
import { CmrDashboardComponent } from './cmr-dashboard/cmr-dashboard.component';
import { CmrLoginComponent } from './cmr-login/cmr-login.component';
import { LeaveComponent } from './leave/leave.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { CmrStaffComponent } from './cmr-staff/cmr-staff.component';
import { CmrBranchesComponent } from './cmr-branches/cmr-branches.component';
import { PolicyComponent } from './policy/policy.component';
import { CmrDepartmentComponent } from './cmr-department/cmr-department.component';
import { MoreComponent } from './more/more.component';
import { CheckComponent } from './check/check.component';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'branch', component: BranchComponent , canActivate: [AuthGuard]},
  { path: 'company', component: CompanyComponent , canActivate: [AuthGuard]},
  { path: 'staff', component: CreateStaffComponent , canActivate: [AuthGuard] },
  { path: 'department', component: DepartmentComponent , canActivate: [AuthGuard] },
  { path: 'announcement', component: AnnouncementComponent , canActivate: [AuthGuard] },
  { path: 'anniversary', component: AnniversaryComponent , canActivate: [AuthGuard] },
  { path: 'birthday', component: BirthdayComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cmrDashboard', component: CmrDashboardComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'cmrLogin', component: CmrLoginComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'companyReg' , component: CompanyRegisterComponent },
  { path: 'cmrStaff', component: CmrStaffComponent, canActivate: [AuthGuard] },
  { path: 'cmrBranch', component: CmrBranchesComponent },
  { path: 'cmrDepartment', component: CmrDepartmentComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'more', component: MoreComponent },
  { path: 'check', component: CheckComponent },
  { path: 'update', component: UpdateComponent },
  // otherwise redirect to home
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
