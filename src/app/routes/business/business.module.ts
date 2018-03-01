import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { BusinessRoutingModule } from './business-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BusinessRoutingModule
  ],
  declarations: []
})
export class BusinessModule { }
