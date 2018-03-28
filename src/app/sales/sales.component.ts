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

    setTimeout(() => {
      this.newMethod();
    },400);

    //this.newMethod();
  }
  private newMethod() {
    this.getSalesList();
  }

   getSalesList(){
     this.salesItems =   SALESITEMS ;
   }

}
