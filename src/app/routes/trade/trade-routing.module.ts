import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderReturnsComponent } from '../market/order-returns/order-returns.component';
import { OrderWarehousingComponent } from './order-warehousing/order-warehousing.component';

const routes: Routes = [
  { path: 'order1', component: OrderListComponent },//采购订单
  { path: 'returns1', component: OrderReturnsComponent },//退货单
  { path: 'warehousing1', component: OrderWarehousingComponent },//其他入库单
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
