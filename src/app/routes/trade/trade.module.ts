import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { OrderReturnsComponent } from './order-returns/order-returns.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderWarehousingComponent } from './order-warehousing/order-warehousing.component';
import { OrderSearchComponent } from './order-list/order-search/order-search.component';

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: [OrderReturnsComponent, OrderListComponent, OrderWarehousingComponent, OrderSearchComponent]
})
export class TradeModule { }
