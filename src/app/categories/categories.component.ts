import { Component, OnInit } from '@angular/core';
import { CategoriesListItem } from './model';
import { CATEGORIES } from './mock-data';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AngularFirestore ,AngularFirestoreCollection} from 'angularfire2/firestore';
import{Category} from './category';
import { Observable } from 'rxjs/Observable';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryCollectionRef: AngularFirestoreCollection<Category>;
  category$: Observable<Category[]>;

  constructor(private spinnerService: Ng4LoadingSpinnerService, public dialog: MatDialog,private afs: AngularFirestore) {
    this.getCategoryList(afs);
   }
  categoryDialogRef: MatDialogRef<CategoryFormComponent>;


  ngOnInit() {}

getCategoryList(afs:AngularFirestore){
    this.spinnerService.show();
    //get categories 
    this.categoryCollectionRef = this.afs.collection<Category>('categories');
    this.category$ = this.categoryCollectionRef.valueChanges();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  openCategoryFormModal() {
    this.categoryDialogRef = this.dialog.open(CategoryFormComponent, {
      width: '600px',
      height: '300px',
    });
  }

}
