import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
const COLLECTION_NAME = "products";

@Injectable()
export class ProductsProvider {
  products: Observable<any[]>;

  get collection() {
    return this.db.collection(COLLECTION_NAME)
  }


  constructor(private db: AngularFirestore) {
    this.products = db.collection(COLLECTION_NAME).valueChanges();
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
    return this.products;
  }

}
