import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CapitalRoutingModule } from './capital-routing.module';
import { OrderPayComponent } from './order-pay/order-pay.component';
import { OtherRevenueComponent } from './other-revenue/other-revenue.component';
import { OtherExpensesComponent } from './other-expenses/other-expenses.component';
import { ProceedsComponent } from './proceeds/proceeds.component';
import { TransferComponent } from './transfer/transfer.component';
import { VerificationComponent } from './verification/verification.component';
import { OtherExpensesSearchComponent } from './other-expenses/other-expenses-search/other-expenses-search.component';
import { OtherRevenueSearchComponent } from './other-revenue/other-revenue-search/other-revenue-search.component';
import { ProceedsSearchComponent } from './proceeds/proceeds-search/proceeds-search.component';
import { TransferSearchComponent } from './transfer/transfer-search/transfer-search.component';
import { VerificationSearchComponent } from './verification/verification-search/verification-search.component';
import { OrderPaySearchComponent } from './order-pay/order-pay-search/order-pay-search.component';

@NgModule({
  imports: [
    SharedModule,
    CapitalRoutingModule
  ],
  declarations: [ OrderPayComponent, OtherRevenueComponent, OtherExpensesComponent, ProceedsComponent, TransferComponent, VerificationComponent, OrderPaySearchComponent, OtherExpensesSearchComponent, OtherRevenueSearchComponent, ProceedsSearchComponent, TransferSearchComponent, VerificationSearchComponent]
})
export class CapitalModule { }
