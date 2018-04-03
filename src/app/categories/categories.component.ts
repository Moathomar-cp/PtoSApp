import { Component, OnInit } from '@angular/core';
import { CategoriesListItem } from './model';
import { CATEGORIES } from './mock-data';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AngularFirestore ,AngularFirestoreCollection} from 'angularfire2/firestore';
import{Category} from './category';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryCollectionRef: AngularFirestoreCollection<Category>;
  category$: Observable<Category[]>;


  constructor(private spinnerService: Ng4LoadingSpinnerService,private afs: AngularFirestore) {
    this.categoryCollectionRef = this.afs.collection<Category>('categories');
    this.category$ = this.categoryCollectionRef.valueChanges();
   }

  ngOnInit() {}

}
