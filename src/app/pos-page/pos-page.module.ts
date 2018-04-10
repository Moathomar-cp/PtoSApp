import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosPageRoutingModule } from './pos-page-routing.module';

import { ProductsListModule } from './products-list/products-list.module';



@NgModule({
  imports: [
    CommonModule,
    ProductsListModule,
    PosPageRoutingModule
    
  ],
  
  declarations: []
})
export class PosPageModule { }
