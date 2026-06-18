import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';
import { ContactManagementComponent } from './components/contact-management/contact-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillHistoryComponent,
    BillDetailComponent,
    ContactManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
