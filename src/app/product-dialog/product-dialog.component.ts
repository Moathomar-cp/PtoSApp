import { Component, OnInit } from '@angular/core';

import { MatDialogModule } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ProuctFormModel } from './type.model';
import { ProductFormService } from '../product-dialog/productForm.service';
import { ProductsProvider } from '@app/providers/products';
import { SuppliersProvider } from '@app/providers/suppliers';
import { TypesProvider } from '@app/providers/productTypes';

import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDialogComponent implements OnInit {

  categories: any;
  suppliers: any;
  productTypes: any;


  taxMethod: string[] = [
    'inclusive',
    'exclusive'
  ];


  productModel: ProuctFormModel = {
    typeId: "Type",
    code: 0,
    name: "Name",
    categoryId: "Category",
    supplierId: "Supplier",
    purchasePrice: "",
    tax: "Tax",
    taxMethodId: "Tax method",
    price: 0,
    productUnit: "kg",
    alertQuantity: 0,
    description: "",
  };

  constructor(private dialogRef: MatDialogRef<ProductDialogComponent>,
    private productFormsrv: ProductFormService) { }

  ngOnInit() {
    this.categories = this.productFormsrv.categories;
    this.suppliers = this.productFormsrv.suppliers;
    this.productTypes = this.productFormsrv.types;
  }


  addProduct() {
    this.productFormsrv.addProduct(this.productModel);
    this.dialogRef.close();
  }




}
