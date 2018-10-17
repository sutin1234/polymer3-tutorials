import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { NextRegisterComponent } from '../../pages/next-register/next-register.component';
import { PaymentComponent } from '../../pages/payment/payment.component';
import { SummaryComponent } from '../../pages/summary/summary.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-course',  redirectTo: '', pathMatch: 'full' },
  { path: 'register-next',  component: NextRegisterComponent },
  { path: 'summary-page',  component: SummaryComponent },
  { path: 'payment-page',  component: PaymentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule { }
