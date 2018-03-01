import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: []
})
export class TradeModule { }
