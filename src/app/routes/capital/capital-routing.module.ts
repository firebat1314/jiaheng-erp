import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPayComponent } from './order-pay/order-pay.component';
import { TransferComponent } from './transfer/transfer.component';
import { ProceedsComponent } from './proceeds/proceeds.component';
import { OtherRevenueComponent } from './other-revenue/other-revenue.component';
import { OtherExpensesComponent } from './other-expenses/other-expenses.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  { path: 'pay', component: OrderPayComponent },
  { path: 'other-expenses', component: OtherExpensesComponent },
  { path: 'other-revenue', component: OtherRevenueComponent },
  { path: 'proceeds', component: ProceedsComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'verification', component: VerificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapitalRoutingModule { }
