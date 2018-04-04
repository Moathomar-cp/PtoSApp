import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesProvider } from '@app/providers/categories';
import { ProductsProvider } from '@app/providers/products';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CategoriesProvider,
    ProductsProvider
  ],
  declarations: []
})
export class ProvidersModule { }
