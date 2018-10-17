import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import 'hammerjs';
import { MaterialModule } from './modules/material/material.module';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { RoutingModule } from './modules/routing/routing-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyTypeComponent } from './components/company-type/company-type.component';
import { HttpClientModule } from '@angular/common/http';
import { NextRegisterComponent } from './pages/next-register/next-register.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    CompanyTypeComponent,
    NextRegisterComponent,
    PaymentComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
