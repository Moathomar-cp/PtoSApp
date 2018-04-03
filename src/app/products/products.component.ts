import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoriesProvider } from '@app/providers/categories';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchText: string;
  products: Product[];
  productDialogRef: MatDialogRef<ProductDialogComponent>;
  categoryDialogRef: MatDialogRef<CategoryFormComponent>;


  constructor(private spinnerService: Ng4LoadingSpinnerService, public dialog: MatDialog) { }


  ngOnInit() {

    this.spinnerService.show();
    setTimeout(() => {
      this.getData();
      this.spinnerService.hide();
    }, 1000);
  }

  getData() {
    this.products = PRODUCTS;
  }

  openProductFormModal() {
    /*  this.dialogRef = this.dialog.open(ProductDialogComponent, {
       hasBackdrop: false}); */

    this.productDialogRef = this.dialog.open(ProductDialogComponent, {
      width: '600px',
      height: '700px',

    });

  }


  openCategoryFormModal() {
    this.categoryDialogRef = this.dialog.open(CategoryFormComponent, {
      width: '600px',
      height: '300px',

    });
  }

}





