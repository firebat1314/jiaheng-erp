import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SettingRoutingModule
  ],
  declarations: []
})
export class SettingModule { }
