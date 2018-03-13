import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WmsComponent } from './wms/wms.component';
import { SettlementMethodComponent } from './settlement-method/settlement-method.component';
import { MerchandiseControlComponent } from './merchandise-control/merchandise-control.component';
import { MeasureUnitComponent } from './measure-unit/measure-unit.component';
import { CqeComponent } from './cqe/cqe.component';
import { CpmComponent } from './cpm/cpm.component';
import { CrmComponent } from './crm/crm.component';
import { PersonnelAdminComponent } from './personnel-admin/personnel-admin.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ExpenseComponent } from './category/expense/expense.component';
import { IncomeComponent } from './category/income/income.component';
import { CrmCategoryComponent } from './category/crm-category/crm-category.component';
import { CqeCategoryComponent } from './category/cqe-category/cqe-category.component';
import { MerchandiseCategoryComponent } from './category/merchandise-category/merchandise-category.component';

const routes: Routes = [
  { path: 'cpm', component: CpmComponent },//仓储管理
  { path: 'cqe', component: CqeComponent },//供应商管理
  { path: 'wms', component: WmsComponent },//仓库管理
  { path: 'crm', component: CrmComponent },//客户管理
  { path: 'brand', component: BrandComponent },//商品品牌
  { path: 'measure-unit', component: MeasureUnitComponent },//计量单位管理
  { path: 'merchandise', component: MerchandiseControlComponent },//商品管理
  { path: 'settlement-method', component: SettlementMethodComponent },//结算方法
  { path: 'personnel-admin', component: PersonnelAdminComponent },//职员管理
  {
    path: 'category', component: CategoryComponent, children: [
      { path: 'cqe-c', component: CqeCategoryComponent },//供应商类别
      { path: 'crm-c', component: CrmCategoryComponent },//客户类别
      { path: 'merchandise-c', component: MerchandiseCategoryComponent },//商品类别
      { path: 'expense-c', component: ExpenseComponent },//支出类别
      { path: 'income-c', component: IncomeComponent },//收入类别
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
