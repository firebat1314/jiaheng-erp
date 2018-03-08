import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderTeardownComponent } from './order-teardown/order-teardown.component';
import { OtherAllocateComponent } from './other-allocate/other-allocate.component';
import { OtherFittingComponent } from './other-fitting/other-fitting.component';
import { OtherOutputComponent } from './other-output/other-output.component';
import { OtherWarehousingComponent } from './other-warehousing/other-warehousing.component';
import { OrderTeardownSearchComponent } from './order-teardown/order-teardown-search/order-teardown-search.component';
import { OtherOutputSearchComponent } from './other-output/other-output-search/other-output-search.component';
import { OtherWarehousingSearchComponent } from './other-warehousing/other-warehousing-search/other-warehousing-search.component';
import { OtherFittingSearchComponent } from './other-fitting/other-fitting-search/other-fitting-search.component';
import { OtherAllocateSearchComponent } from './other-allocate/other-allocate-search/other-allocate-search.component';
import { InventorySearchComponent } from './inventory/inventory-search/inventory-search.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'teardown', component: OrderTeardownComponent },
  { path: 'allocate', component: OtherAllocateComponent },
  { path: 'fitting', component: OtherFittingComponent },
  { path: 'output', component: OtherOutputComponent },
  { path: 'warehousing', component: OtherWarehousingComponent },
  { path: 'teardown-search', component: OrderTeardownSearchComponent },
  { path: 'output-search', component: OtherOutputSearchComponent },
  { path: 'warehousing-search', component: OtherWarehousingSearchComponent },
  { path: 'allocate-search', component: OtherAllocateSearchComponent },
  { path: 'fitting-search', component: OtherFittingSearchComponent },
  { path: 'inventory-search', component: InventorySearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepotRoutingModule { }
