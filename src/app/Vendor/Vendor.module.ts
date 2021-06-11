

import {
  NbCardModule,
  NbMenuModule,
  NbStepperModule,
  NbButtonModule,
  NbSelectModule,
  NbInputModule,
  NbDatepickerModule,
  NbPopoverModule,
  NbAlertModule,
  NbActionsModule,
  NbIconModule,
} from "@nebular/theme";

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './Vendor.component';
import { ThemeModule } from '../@theme/theme.module';
import { VendorRoutesModule } from './Vendor.routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/**========================================================================
 *                           My Components
 *========================================================================**/
import { AddProductComponent } from './Product/AddProduct/AddProduct.component';
import { CatalogPerformanceComponent } from './Reports/Catalog-performance/Catalog-performance.component';
import { SalesReportsComponent } from './Reports/SalesReports/SalesReports.component';
import { PromotionComponent } from './Promotion/Promotion/Promotion.component';
import { OrderComponent } from './Order/order/order.component';
import { ManageImageComponent } from './Product/ManageImage/ManageImage.component';
import { EditProductComponent } from './Product/EditProduct/EditProduct.component';
import { CategoryService } from '../Services/Category.service';
import { CKEditorModule } from 'ng2-ckeditor';
import { EditorsModule } from './../pages/editors/editors.module';
import { ProductService } from './../Services/Product.service';
import { Ng2SmartTableModule } from "ng2-smart-table";

import { FormEditProductComponent } from "./Product/EditProduct/FormEditProduct/FormEditProduct.component";







@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbMenuModule,
    VendorRoutesModule,
    NbButtonModule,
    NbCardModule,
    NbStepperModule,
    NbSelectModule,
    NbInputModule,
    EditorsModule,
    CKEditorModule,
    NbDatepickerModule,
    FormsModule,
    NbPopoverModule,
    ReactiveFormsModule,
    NbAlertModule,
    Ng2SmartTableModule,
    NbActionsModule,
    NbIconModule,

  ],
  declarations: [
    VendorComponent, AddProductComponent,
    EditProductComponent, ManageImageComponent,
    OrderComponent, PromotionComponent,
    SalesReportsComponent, CatalogPerformanceComponent,
  FormEditProductComponent
  ],


  providers: [ProductService, CategoryService, ReactiveFormsModule]
})
export class VendorModule { }
