import { Component, OnInit } from '@angular/core';
import { SalesListItem } from './model';
import { SALESITEMS } from './mock-data';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AngularFirestore ,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Sales } from './sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  categoryCollectionRef: AngularFirestoreCollection<Sales>;
  sale$: Observable<Sales[]>;

  constructor(private spinner: Ng4LoadingSpinnerService,private afs: AngularFirestore) {
    this.getSaleList(afs);
   }
  ngOnInit() {}

getSaleList(afs:AngularFirestore){
    this.spinner.show();
    //get categories 
    this.categoryCollectionRef = this.afs.collection<Sales>('sales');
    this.sale$ = this.categoryCollectionRef.valueChanges();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
