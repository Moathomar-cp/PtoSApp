import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchText :string;
  products : Product[];

  constructor(private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {

    this.spinnerService.show();
    setTimeout(() => {
      this.getData();
      this.spinnerService.hide();
    }, 1000);
  }
  getData() {
  this.products = PRODUCTS;
  }

}
