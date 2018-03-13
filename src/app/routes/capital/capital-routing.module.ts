import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPayComponent } from './order-pay/order-pay.component';
import { TransferComponent } from './transfer/transfer.component';
import { ProceedsComponent } from './proceeds/proceeds.component';
import { OtherRevenueComponent } from './other-revenue/other-revenue.component';
import { OtherExpensesComponent } from './other-expenses/other-expenses.component';
import { VerificationComponent } from './verification/verification.component';
import { ProceedsSearchComponent } from './proceeds/proceeds-search/proceeds-search.component';
import { VerificationSearchComponent } from './verification/verification-search/verification-search.component';
import { TransferSearchComponent } from './transfer/transfer-search/transfer-search.component';
import { OtherRevenueSearchComponent } from './other-revenue/other-revenue-search/other-revenue-search.component';
import { OtherExpensesSearchComponent } from './other-expenses/other-expenses-search/other-expenses-search.component';
import { OrderPaySearchComponent } from './order-pay/order-pay-search/order-pay-search.component';

const routes: Routes = [
  { path: 'pay', component: OrderPayComponent },
  { path: 'other-expenses', component: OtherExpensesComponent },
  { path: 'other-revenue', component: OtherRevenueComponent },
  { path: 'proceeds', component: ProceedsComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'pay-s', component: OrderPaySearchComponent },
  { path: 'other-expenses-s', component: OtherExpensesSearchComponent },
  { path: 'other-revenue-s', component: OtherRevenueSearchComponent },
  { path: 'proceeds-s', component: ProceedsSearchComponent },
  { path: 'transfer-s', component: TransferSearchComponent },
  { path: 'verification-s', component: VerificationSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapitalRoutingModule { }
