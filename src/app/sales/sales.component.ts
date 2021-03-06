import { Component, OnInit } from '@angular/core';
import { SalesListItem } from './model';
import { SALESITEMS } from './mock-data';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

//declare var hi:any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {


  salesItems: SalesListItem[] = [];
  constructor(private spinner: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.getSalesList();
  }

  getSalesList() {
    this.spinner.show();
    setTimeout(() => {
      this.salesItems = SALESITEMS;
      this.spinner.hide();
    }, 1000);
  }
}

