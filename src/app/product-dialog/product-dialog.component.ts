import { Component, OnInit } from '@angular/core';
/* Import Mat Dialog */
import { MatDialogModule } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ProuctFormModel } from './type.model';

/* "ViewEncapsulation" used to be able to edit mat-dialog CSS classes 
specialy : to get rid of the white space in  Material modal dialog
*/
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDialogComponent implements OnInit {
  types: string[] = [
    'Standard',
    'Service',
    'Combination'
  ];


  categories: string[] = [
    'Drinks',
    'Sweet',
    'Food',
  ];

  suppliers: string[] = [
    'supplier1',
    'supplier2',
    'supplier3',
  ];


  taxMethod: string[] = [
   'inclusive',
   'exclusive'
  ];

  formModel :ProuctFormModel = {
    typeId: "Type",
    code: 0,
    name: "Name",
    categoryId: "Category",
    supplierId: "Supplier",
    purchasePrice: "Purchase price",
    tax: "Tax",
    taxMethodId: "Tax method",
    price: 0,
    productUnit: "Product unit",
    alertQuantity: 0,
    description: "",
  };

  constructor(private dialogRef: MatDialogRef<ProductDialogComponent>) { }
  ngOnInit() {

  }

  setData() {
  }
}
