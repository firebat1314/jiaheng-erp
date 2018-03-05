import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderWarehousingComponent } from './order-warehousing/order-warehousing.component';
import { OrderReturnsComponent } from './order-returns/order-returns.component';

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: [OrderListComponent, OrderWarehousingComponent, OrderReturnsComponent]
})
export class TradeModule { }
