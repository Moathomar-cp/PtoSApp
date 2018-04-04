import { Component, OnInit } from '@angular/core';
/* Import Mat Dialog */
import { MatDialogModule } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ProuctFormModel } from './type.model';
import { ProductsProvider } from '@app/providers/products';
/* "ViewEncapsulation" used to be able to edit mat-dialog CSS classes 
specialy : to get rid of  white spaces in  Material modal dialog*/
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDialogComponent implements OnInit {

  types: { id: number, name: string }[] = [
    { id: 0, name: 'Standard' },
    { id: 1, name: 'Service' },
    { id: 2, name: 'Combination' }
  ];


  categories: { id: number, name: string, createdAt: string | Date }[] = [
    { id: 0, name: 'Standard', createdAt: '' },
    { id: 1, name: 'Service', createdAt: '' },
    { id: 2, name: 'Combination', createdAt: '' }
  ];



  suppliers: { id: number, name: string, phone: number, email: string, note: string }[] = [
    { id: 0, name: 'supplier1', phone: 0, email: '', note: '' },
    { id: 1, name: 'supplier2', phone: 0, email: '', note: '' },
    { id: 2, name: 'suppliers3', phone: 0, email: '', note: '' }
  ];



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
    purchasePrice: 0,
    tax: "Tax",
    taxMethodId: "Tax method",
    price: 0,
    productUnit: "kg",
    alertQuantity: 0,
    description: "",
  };


  constructor(private dialogRef: MatDialogRef<ProductDialogComponent>, private productieSrvc: ProductsProvider) { }
  ngOnInit() {

  }


  addProduct() {
    this.productieSrvc.add(this.productModel);
    this.dialogRef.close();
  }


}
