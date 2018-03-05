import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MarketRoutingModule } from './market-routing.module';
import { OrderComponent } from './order/order.component';
import { OrderOutputComponent } from './order-output/order-output.component';
import { OrderReturnsComponent } from './order-returns/order-returns.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  imports: [
    SharedModule,
    MarketRoutingModule
  ],
  declarations: [OrderComponent, OrderOutputComponent, OrderReturnsComponent, InvoiceComponent]
})
export class MarketModule { }
