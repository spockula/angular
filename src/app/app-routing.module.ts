import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'staff-details', loadChildren: './staff-details/staff-details.module#StaffDetailsPageModule' },
  { path: 'terms-condition', loadChildren: './terms-condition/terms-condition.module#TermsConditionPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'branch-details', loadChildren: './branch-details/branch-details.module#BranchDetailsPageModule' },
  { path: 'department-details', loadChildren: './department-details/department-details.module#DepartmentDetailsPageModule' },
  { path: 'all-aniversaries', loadChildren: './all-aniversaries/all-aniversaries.module#AllAniversariesPageModule' },
  { path: 'all-birthdays', loadChildren: './all-birthdays/all-birthdays.module#AllBirthdaysPageModule' },
  { path: 'leave-tracker', loadChildren: './leave-tracker/leave-tracker.module#LeaveTrackerPageModule' },
  { path: 'request-modal', loadChildren: './request-modal/request-modal.module#RequestModalPageModule' },
  { path: 'approvals', loadChildren: './approvals/approvals.module#ApprovalsPageModule' },
  { path: 'check', loadChildren: './check/check.module#CheckPageModule' },
  { path: 'check-modal', loadChildren: './check-modal/check-modal.module#CheckModalPageModule' },
  { path: 'check-out-modal', loadChildren: './check-out-modal/check-out-modal.module#CheckOutModalPageModule' },
  { path: 'colleague-modal', loadChildren: './colleague-modal/colleague-modal.module#ColleagueModalPageModule' },
  { path: 'success-check-modal', loadChildren: './success-check-modal/success-check-modal.module#SuccessCheckModalPageModule' },
  { path: 'colleague-welcome', loadChildren: './colleague-welcome/colleague-welcome.module#ColleagueWelcomePageModule' },
  { path: 'colleague-checkin', loadChildren: './colleague-checkin/colleague-checkin.module#ColleagueCheckinPageModule' },
  { path: 'colleague-checkout', loadChildren: './colleague-checkout/colleague-checkout.module#ColleagueCheckoutPageModule' },
  { path: 'success-checkout', loadChildren: './success-checkout/success-checkout.module#SuccessCheckoutPageModule' },
  { path: 'company-profile', loadChildren: './company-profile/company-profile.module#CompanyProfilePageModule' },
  { path: 'policy', loadChildren: './policy/policy.module#PolicyPageModule' },
  { path: 'pdf-modal', loadChildren: './pdf-modal/pdf-modal.module#PdfModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
