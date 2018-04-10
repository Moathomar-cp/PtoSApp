import { Component, OnInit } from '@angular/core';

import { ProductsProvider } from '@app/providers/products';
import { CategoriesProvider } from '@app/providers/categories';

import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'app-pos-page',
  templateUrl: './pos-page.component.html',
  styleUrls: ['./pos-page.component.scss']
})
export class PosPageComponent implements OnInit {
  searchText: string;
  categories: any;
  products: any;
  selectedCategory: string;

  constructor(
    private productsProvider: ProductsProvider,
    private categoriesProvider: CategoriesProvider) { }


  ngOnInit() {

    this.categories = this.categoriesProvider.getList();
    this.products = this.productsProvider.getList();
  }



  onClick(category: any, id: any) {
    this.selectedCategory = category;

    this.products = this.productsProvider.getProducts(category,id);
  }


  getAllProducts(){
    this.products = this.productsProvider.getList();
  }
}

