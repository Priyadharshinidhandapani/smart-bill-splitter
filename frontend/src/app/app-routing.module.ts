import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';
import { ContactManagementComponent } from './components/contact-management/contact-management.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [

  // Public Routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected Routes
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'history',
    component: BillHistoryComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'history/:id',
    component: BillDetailComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'contacts',
    component: ContactManagementComponent,
    canActivate: [AuthGuard]
  },

  // Wildcard Route
  { path: '**', redirectTo: 'login' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
