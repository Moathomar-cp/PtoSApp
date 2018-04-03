import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component'
import { MatDialogModule } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatFormFieldModule,MatInputModule ,MatFormFieldControl} from '@angular/material';
import {FilterPipe} from './filter.pipe'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ProductsRoutingModule
  ],
  providers: [{provide: MatFormFieldControl, useExisting: ''}],
  declarations: [ProductsComponent, FilterPipe, ProductDialogComponent],
  entryComponents: [ProductDialogComponent]
})
export class ProductsModule { }
