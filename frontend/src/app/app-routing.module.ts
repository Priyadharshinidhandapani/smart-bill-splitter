import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';
import { ContactManagementComponent } from './components/contact-management/contact-management.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: BillHistoryComponent },
  { path: 'history/:id', component: BillDetailComponent },
  { path: 'contacts', component: ContactManagementComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
