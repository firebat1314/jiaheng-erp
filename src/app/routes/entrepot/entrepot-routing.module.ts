import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderTeardownComponent } from './order-teardown/order-teardown.component';
import { OtherAllocateComponent } from './other-allocate/other-allocate.component';
import { OtherFittingComponent } from './other-fitting/other-fitting.component';
import { OtherOutputComponent } from './other-output/other-output.component';
import { OtherWarehousingComponent } from './other-warehousing/other-warehousing.component';

const routes: Routes = [
  {path:'inventory',component:InventoryComponent},
  {path:'teardown',component:OrderTeardownComponent},
  {path:'allocate',component:OtherAllocateComponent},
  {path:'fitting',component:OtherFittingComponent},
  {path:'output',component:OtherOutputComponent},
  {path:'warehousing',component:OtherWarehousingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepotRoutingModule { }
