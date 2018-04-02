import { Component, OnInit } from '@angular/core';
import { CategoriesListItem } from './model';
import { CATEGORIES } from './mock-data';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesItems: CategoriesListItem[] = [];

  constructor() { }

  ngOnInit() {

    this.getCategoriesList();
  }

  private newMethod() {
    this.getCategoriesList();
  }

  getCategoriesList() {
    this.categoriesItems = CATEGORIES;
  }

}
