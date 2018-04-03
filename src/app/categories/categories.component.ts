import { Component, OnInit } from '@angular/core';
import { CategoriesListItem } from './model';
import { CATEGORIES } from './mock-data';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AngularFirestore ,AngularFirestoreCollection} from 'angularfire2/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesItems: CategoriesListItem[] = [];

  constructor(private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.getCategoriesList();

  }

  getCategoriesList() {
    this.spinnerService.show();

    setTimeout(() => {
      this.categoriesItems = CATEGORIES;
      this.spinnerService.hide();
    }, 1000);
  }

}
