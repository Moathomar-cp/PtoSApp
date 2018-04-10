import { Component, OnInit, Input } from '@angular/core';
import { ProductsProvider } from '@app/providers/products';
import { CategoriesProvider } from '@app/providers/categories';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() category: string;
  @Input() filteredProducts: any;
  @Input () searchText :any;
  products: any;


  constructor(
    private productsProvider: ProductsProvider,
    private categoriesProvider: CategoriesProvider) {

  }

  ngOnInit() {
    this.products = this.productsProvider.getList();
  }

  ngOnChanges(category: string) {
    this.products = this.filteredProducts;
  }



}
