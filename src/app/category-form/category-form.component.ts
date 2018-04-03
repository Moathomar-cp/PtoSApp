import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFormComponent implements OnInit {

  constructor(private dialogRef2: MatDialogRef<CategoryFormComponent>) { }

  ngOnInit() {
  }

}
