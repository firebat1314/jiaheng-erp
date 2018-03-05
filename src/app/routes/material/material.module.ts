import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialRoutingModule } from './material-routing.module';
import { WmsComponent } from './wms/wms.component';
import { CqeComponent } from './cqe/cqe.component';
import { MeasureUnitComponent } from './measure-unit/measure-unit.component';
import { SettlementMethodComponent } from './settlement-method/settlement-method.component';
import { CrmComponent } from './crm/crm.component';
import { CpmComponent } from './cpm/cpm.component';
import { MerchandiseControlComponent } from './merchandise-control/merchandise-control.component';
import { MerchandiseControlTwoComponent } from './merchandise-control-two/merchandise-control-two.component';
import { PersonnelAdminComponent } from './personnel-admin/personnel-admin.component';
import { BrandComponent } from './brand/brand.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialRoutingModule
  ],
  declarations: [WmsComponent, CqeComponent, MeasureUnitComponent, SettlementMethodComponent, CrmComponent, CpmComponent, MerchandiseControlComponent, MerchandiseControlTwoComponent, PersonnelAdminComponent, BrandComponent]
})
export class MaterialModule { }
