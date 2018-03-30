import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { TYPES, ENTRIES, SUPPLIERS, PROPERTIES } from './data-arrays';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchText: string;
  products: Product[];
  entries: any;
  suppliers: any;
  types: any;
  properties: any;

  constructor(private spinnerService: Ng4LoadingSpinnerService) {

  }

  ngOnInit() {
    this.getDataArrays();

    this.spinnerService.show();
    setTimeout(() => {
      this.getData();
      this.spinnerService.hide();
    }, 1000);
  }


  getData() {
    this.products = PRODUCTS;
  }

  getDataArrays() {
    this.entries = ENTRIES;
    this.types = TYPES;
    this.suppliers = SUPPLIERS;
    this.properties = PROPERTIES;
  }
}
