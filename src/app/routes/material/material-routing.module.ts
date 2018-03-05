import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WmsComponent } from './wms/wms.component';
import { SettlementMethodComponent } from './settlement-method/settlement-method.component';
import { MerchandiseControlTwoComponent } from './merchandise-control-two/merchandise-control-two.component';
import { MerchandiseControlComponent } from './merchandise-control/merchandise-control.component';
import { MeasureUnitComponent } from './measure-unit/measure-unit.component';
import { CqeComponent } from './cqe/cqe.component';
import { CpmComponent } from './cpm/cpm.component';
import { CrmComponent } from './crm/crm.component';
import { PersonnelAdminComponent } from './personnel-admin/personnel-admin.component';
import { BrandComponent } from './brand/brand.component';

const routes: Routes = [
  {path:'cpm',component:CpmComponent},//仓储管理
  {path:'cqe',component:CqeComponent},//供应商管理
  {path:'measure-unit',component:MeasureUnitComponent},//计量单位管理
  {path:'crm',component:CrmComponent},//客户管理
  {path:'merchandise-c',component:MerchandiseControlComponent},//商品管理
  {path:'merchandise-c-2',component:MerchandiseControlTwoComponent},//商品管理
  {path:'settlement-method',component:SettlementMethodComponent},//结算方法
  {path:'wms',component:WmsComponent},//仓库管理
  {path:'personnel-admin',component:PersonnelAdminComponent},//职员管理
  {path:'brand',component:BrandComponent},//商品品牌
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
