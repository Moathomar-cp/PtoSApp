import { Component, OnInit } from '@angular/core';
import { SalesListItem } from './model';
import { SALESITEMS } from './mock-data';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

//declare var hi:any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  items: Observable<any[]>;

  isLoadingItems = false;

  salesItems: SalesListItem[] = [];
  constructor(  db: AngularFirestore ) {
    this.items = db.collection('items').valueChanges();
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
