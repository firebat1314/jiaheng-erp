import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MarketRoutingModule } from './market-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MarketRoutingModule
  ],
  declarations: []
})
export class MarketModule { }
