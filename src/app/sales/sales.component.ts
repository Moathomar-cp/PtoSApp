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
  
  

   salesItems : SalesListItem[];   
  constructor() {
   }
   
  ngOnInit() {
    
    document.getElementById('pid').style.display = "block";


    setTimeout(() => {
      document.getElementById('pid').style.display = "none";


          this.newMethod();
    },400);
     
  }
  private newMethod() {
    this.getSalesList();
  }

   getSalesList(){
     this.salesItems =   SALESITEMS ;
   }

}
