import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
const COLLECTION_NAME = "products";

interface Product {
  code: number;
  name: string;
  category: string;
  description: string;
  tax: string;
  price: string;
  action: string;
}

@Injectable()
export class ProductsProvider {

  products: Observable<Product[]>;
  productsCol: AngularFirestoreCollection<Product>;

  get collection() {
    return this.db.collection(COLLECTION_NAME)
  }


  constructor(private db: AngularFirestore) {
    this.productsCol = db.collection(COLLECTION_NAME);
    this.products = this.productsCol.valueChanges();
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


  getProducts(category: string, categoryId: string) {

    if (category == "All") {
      this.productsCol = this.db.collection(COLLECTION_NAME);
      this.products = this.productsCol.valueChanges();
    }

    else {
      this.productsCol = this.db.collection('products', ref => ref.where('categoryId', '==', categoryId));
      this.products = this.productsCol.valueChanges();

    }

    return this.products;
  }

}
