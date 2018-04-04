import { Component, OnInit } from '@angular/core';
import { SalesListItem } from './model';
import { SALESITEMS } from './mock-data';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

//declare var hi:any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  items: Observable<any[]>;


  salesItems: SalesListItem[] = [];
  constructor(  db: AngularFirestore , private spinner: Ng4LoadingSpinnerService ) {
    this.items = db.collection('items').valueChanges();
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

