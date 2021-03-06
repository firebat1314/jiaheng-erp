import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderWarehousingComponent } from './order-warehousing/order-warehousing.component';
import { OrderReturnsComponent } from './order-returns/order-returns.component';
import { OrderSearchComponent } from './order-list/order-search/order-search.component';
import { OrderWarehousingSearchComponent } from './order-warehousing/order-warehousing-search/order-warehousing-search.component';
import { OrderReturnsSearchComponent } from './order-returns/order-returns-search/order-returns-search.component';

const routes: Routes = [
  { path: 'order', component: OrderListComponent },//采购订单
  { path: 'returns', component: OrderReturnsComponent },//退货单
  { path: 'warehousing', component: OrderWarehousingComponent },//其他入库单
  { path: 'order-search', component: OrderSearchComponent },//采购订单查询
  { path: 'warehousing-search', component: OrderWarehousingSearchComponent },//采购订单查询
  { path: 'returns-search', component: OrderReturnsSearchComponent },//采购订单查询
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
