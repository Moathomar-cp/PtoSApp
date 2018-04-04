import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { TYPES, ENTRIES, SUPPLIERS, PROPERTIES } from './data-arrays';
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
  entries: any;
  suppliers: any;
  types: any;
  properties: any;
  productDialogRef: MatDialogRef<ProductDialogComponent>;
  categoryDialogRef: MatDialogRef<CategoryFormComponent>;


  constructor(private spinnerService: Ng4LoadingSpinnerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getDataArrays();
    this.getData();
  }

  getData() { 
    this.spinnerService.show();
    setTimeout(() => {
      this.products = PRODUCTS;
      this.spinnerService.hide();
    }, 1000);
  }

  getDataArrays() {
    this.entries = ENTRIES;
    this.types = TYPES;
    this.suppliers = SUPPLIERS;
    this.properties = PROPERTIES;
  }
  
  openProductFormModal() {
    this.productDialogRef = this.dialog.open(ProductDialogComponent, {
      width: '600px',
      height: '600px',
    });
  }

  openCategoryFormModal() {
    this.categoryDialogRef = this.dialog.open(CategoryFormComponent, {
      width: '600px',
      height: '300px',
    });
  }

}