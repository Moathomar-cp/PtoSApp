import { Component, OnInit } from '@angular/core';
import { CategoriesProvider } from '@app/providers/categories';

@Component({
  selector: 'app-pos-page',
  templateUrl: './pos-page.component.html',
  styleUrls: ['./pos-page.component.scss']
})
export class PosPageComponent implements OnInit {


  get categories() {
    return this.categoriesProvider.getList();
  }

  constructor(private categoriesProvider: CategoriesProvider) { }

  ngOnInit() {
  }

}

