import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CapitalRoutingModule } from './capital-routing.module';
import { OrderPayComponent } from './order-pay/order-pay.component';
import { OtherRevenueComponent } from './other-revenue/other-revenue.component';
import { OtherExpensesComponent } from './other-expenses/other-expenses.component';
import { ProceedsComponent } from './proceeds/proceeds.component';
import { TransferComponent } from './transfer/transfer.component';
import { VerificationComponent } from './verification/verification.component';

@NgModule({
  imports: [
    SharedModule,
    CapitalRoutingModule
  ],
  declarations: [ OrderPayComponent, OtherRevenueComponent, OtherExpensesComponent, ProceedsComponent, TransferComponent, VerificationComponent]
})
export class CapitalModule { }
