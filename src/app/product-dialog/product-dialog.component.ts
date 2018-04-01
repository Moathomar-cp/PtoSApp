import { Component, OnInit } from '@angular/core';
/* Import Mat Dialog */
import { MatDialogModule } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
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
  constructor(private dialogRef: MatDialogRef<ProductDialogComponent>) { }
  ngOnInit() {

  } 
  
}
