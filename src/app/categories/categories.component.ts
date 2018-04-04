import { Component, OnInit } from '@angular/core';
import { CategoriesListItem } from './model';
import { CATEGORIES } from './mock-data';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesItems: CategoriesListItem[] = [];
  categoryDialogRef: MatDialogRef<CategoryFormComponent>;

  constructor(private spinnerService: Ng4LoadingSpinnerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getCategoriesList();

  }

  getCategoriesList() {
    this.spinnerService.show();

    setTimeout(() => {
      this.categoriesItems = CATEGORIES;
      this.spinnerService.hide();
    }, 1000);
  }

  openCategoryFormModal() {
    this.categoryDialogRef = this.dialog.open(CategoryFormComponent, {
      width: '600px',
      height: '300px',
    });
  }

}
