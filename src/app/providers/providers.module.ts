import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesProvider } from '@app/providers/categories';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CategoriesProvider
  ],
  declarations: []
})
export class ProvidersModule { }
