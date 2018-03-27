import { Component, OnInit } from '@angular/core';
import { SalesListItem } from '../model';
import { SALESITEMS } from '../mock-data';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
   sales: SalesListItem []= [];
   salesItems = SALESITEMS ;
   
  constructor() { }

  ngOnInit() {
  }

}
