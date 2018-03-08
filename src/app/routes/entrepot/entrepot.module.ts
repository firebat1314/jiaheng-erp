import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EntrepotRoutingModule } from './entrepot-routing.module';
import { OrderTeardownComponent } from './order-teardown/order-teardown.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OtherOutputComponent } from './other-output/other-output.component';
import { OtherWarehousingComponent } from './other-warehousing/other-warehousing.component';
import { OtherAllocateComponent } from './other-allocate/other-allocate.component';
import { OtherFittingComponent } from './other-fitting/other-fitting.component';
import { OrderTeardownSearchComponent } from './order-teardown/order-teardown-search/order-teardown-search.component';
import { OtherOutputSearchComponent } from './other-output/other-output-search/other-output-search.component';
import { OtherWarehousingSearchComponent } from './other-warehousing/other-warehousing-search/other-warehousing-search.component';
import { OtherFittingSearchComponent } from './other-fitting/other-fitting-search/other-fitting-search.component';
import { OtherAllocateSearchComponent } from './other-allocate/other-allocate-search/other-allocate-search.component';
import { InventorySearchComponent } from './inventory/inventory-search/inventory-search.component';

@NgModule({
  imports: [
    SharedModule,
    EntrepotRoutingModule
  ],
  declarations: [OrderTeardownComponent, InventoryComponent, OtherOutputComponent, OtherWarehousingComponent, OtherAllocateComponent, OtherFittingComponent, OrderTeardownSearchComponent, OtherOutputSearchComponent, OtherWarehousingSearchComponent, OtherFittingSearchComponent, OtherAllocateSearchComponent, InventorySearchComponent]
})
export class EntrepotModule { }
