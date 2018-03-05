import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderComponent } from './order/order.component';
import { OrderReturnsComponent } from '../trade/order-returns/order-returns.component';
import { OrderOutputComponent } from './order-output/order-output.component';

const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent },
  { path: 'order', component: OrderComponent },
  { path: 'output', component: OrderOutputComponent },
  { path: 'returns', component: OrderReturnsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
