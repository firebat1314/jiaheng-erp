import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PosRoutingModule } from './pos-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PosRoutingModule
  ],
  declarations: []
})
export class PosModule { }
