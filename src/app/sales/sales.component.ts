import { Component, OnInit } from '@angular/core';
import { SalesListItem } from './model';
import { SALESITEMS } from './mock-data';

//declare var hi:any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  isLoadingItems = false;

  salesItems: SalesListItem[] = [];
  constructor() {
  }

  ngOnInit() {
    this.getSalesList();
  }

  private newMethod() {
    this.getSalesList();
  }

  getSalesList() {

    this.isLoadingItems = true;
    setTimeout(() => {
      this.salesItems = SALESITEMS;
      this.isLoadingItems = false;
    }, 2000);
  }

}
