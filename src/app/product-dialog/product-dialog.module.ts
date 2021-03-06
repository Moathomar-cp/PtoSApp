import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatDialogModule } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [ProductDialogComponent]
})
export class ProductDialogModule { }
