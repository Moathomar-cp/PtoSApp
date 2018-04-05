import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesProvider } from '@app/providers/categories';
import { ProductsProvider } from '@app/providers/products';
import { SuppliersProvider } from '@app/providers/suppliers';
import { TypesProvider } from '@app/providers/productTypes';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CategoriesProvider,
    ProductsProvider,
    SuppliersProvider,
    TypesProvider
  ],
  declarations: []
})
export class ProvidersModule { }
