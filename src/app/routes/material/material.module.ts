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
import { PersonnelAdminComponent } from './personnel-admin/personnel-admin.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ExpenseComponent } from './category/expense/expense.component';
import { IncomeComponent } from './category/income/income.component';
import { MerchandiseCategoryComponent } from './category/merchandise-category/merchandise-category.component';
import { CqeCategoryComponent } from './category/cqe-category/cqe-category.component';
import { CrmCategoryComponent } from './category/crm-category/crm-category.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialRoutingModule
  ],
  declarations: [WmsComponent, CqeComponent, MeasureUnitComponent, SettlementMethodComponent, CrmComponent, CpmComponent, MerchandiseControlComponent, PersonnelAdminComponent, BrandComponent, CqeCategoryComponent, CrmCategoryComponent, MerchandiseCategoryComponent, CategoryComponent, ExpenseComponent, IncomeComponent]
})
export class MaterialModule { }
