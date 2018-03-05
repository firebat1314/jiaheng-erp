import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EntrepotRoutingModule } from './entrepot-routing.module';
import { OrderTeardownComponent } from './order-teardown/order-teardown.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OtherOutputComponent } from './other-output/other-output.component';
import { OtherWarehousingComponent } from './other-warehousing/other-warehousing.component';
import { OtherAllocateComponent } from './other-allocate/other-allocate.component';
import { OtherFittingComponent } from './other-fitting/other-fitting.component';

@NgModule({
  imports: [
    SharedModule,
    EntrepotRoutingModule
  ],
  declarations: [OrderTeardownComponent, InventoryComponent, OtherOutputComponent, OtherWarehousingComponent, OtherAllocateComponent, OtherFittingComponent]
})
export class EntrepotModule { }
