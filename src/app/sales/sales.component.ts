import { Component, OnInit } from '@angular/core';
import { SalesListItem } from '../model';
import { SALESITEMS } from '../mock-data';

//declare var hi:any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  /*timeoutId = setTimeout(() => {  
    alert("hi");
}, 2000);
*/
  
   salesItems : SalesListItem[];

  //s= hi();
  //salesItem = getSalesList();
   
  constructor() {
   }
   
  ngOnInit() {
    this.newMethod();
  }
  private newMethod() {
    this.getList();
  }

   getList(){
     this.salesItems =   SALESITEMS ;
   }

}
