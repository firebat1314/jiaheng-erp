import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CapitalRoutingModule } from './capital-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CapitalRoutingModule
  ],
  declarations: []
})
export class CapitalModule { }
