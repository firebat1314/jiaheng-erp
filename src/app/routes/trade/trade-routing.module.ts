import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderWarehousingComponent } from './order-warehousing/order-warehousing.component';
import { OrderReturnsComponent } from './order-returns/order-returns.component';

const routes: Routes = [
  { path: 'order', component: OrderListComponent },//采购订单
  { path: 'returns', component: OrderReturnsComponent },//退货单
  { path: 'warehousing', component: OrderWarehousingComponent }//其他入库单
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
