import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MarketRoutingModule } from './market-routing.module';
import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReturnsComponent } from './returns/returns.component';
import { OutputComponent } from './output/output.component';
import { OrderSearchComponent } from './order/order-search/order-search.component';
import { ReturnsSearchComponent } from './returns/returns-search/returns-search.component';
import { OutputSearchComponent } from './output/output-search/output-search.component';
import { InvoiceSearchComponent } from './invoice/invoice-search/invoice-search.component';

@NgModule({
  imports: [
    SharedModule,
    MarketRoutingModule
  ],
  declarations: [OrderComponent, InvoiceComponent, OrderSearchComponent, ReturnsSearchComponent, OutputSearchComponent, InvoiceSearchComponent, OutputComponent, ReturnsComponent]
})
export class MarketModule { }
