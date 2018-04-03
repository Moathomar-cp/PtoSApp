import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { CategoriesProvider } from '@app/providers/categories';
import {CategoryFormModel} from './type.model'
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFormComponent implements OnInit {

  categoryModel : CategoryFormModel = {
    name :'Category name',
    createdAt :''
  };

  constructor(private dialogRef2: MatDialogRef<CategoryFormComponent>, private categrorieSrvc: CategoriesProvider) { }

  ngOnInit() {
  }


  addCategory() {
    this.categoryModel.createdAt = new Date().toLocaleString();
    this.categrorieSrvc.add(this.categoryModel);
  }

}
