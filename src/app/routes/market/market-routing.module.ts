import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderComponent } from './order/order.component';
import { OutputComponent } from './output/output.component';
import { ReturnsComponent } from './returns/returns.component';
import { OutputSearchComponent } from './output/output-search/output-search.component';
import { OrderSearchComponent } from './order/order-search/order-search.component';
import { InvoiceSearchComponent } from './invoice/invoice-search/invoice-search.component';
import { ReturnsSearchComponent } from './returns/returns-search/returns-search.component';

const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent },
  { path: 'invoice-search', component: InvoiceSearchComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-search', component: OrderSearchComponent },
  { path: 'output', component: OutputComponent },
  { path: 'output-search', component: OutputSearchComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: 'returns-search', component: ReturnsSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
