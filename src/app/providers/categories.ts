import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CategoryFormModel } from '../category-form/type.model'

const COLLECTION_NAME = "categories";

@Injectable()
export class CategoriesProvider {
  categories: Observable<any[]>;

  get collection() {
    return this.db.collection(COLLECTION_NAME)
  }

  constructor(private db: AngularFirestore) {
    this.categories = db.collection(COLLECTION_NAME).valueChanges();
  }

  add(model: any) {
    model.id = this.db.createId();
    this.db.collection(COLLECTION_NAME).doc(model.id).set(model);
  }

  update(model: any) {
    model.save();
  }

  deletes(id: string) {
    let ref = this.collection.ref;

  }

  getList() {
    return this.categories;
  }
}
