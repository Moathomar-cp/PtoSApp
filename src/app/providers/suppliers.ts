import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
const COLLECTION_NAME = "suppliers";

@Injectable()
export class SuppliersProvider {
  suppliers: Observable<any[]>;
  get collection() {
    return this.db.collection(COLLECTION_NAME)
  }
  constructor(private db: AngularFirestore) {
    this.suppliers = db.collection(COLLECTION_NAME).valueChanges();
  }

  add(model: any) {
    this.collection.add(model);
  }

  update(model: any) {
    model.save();
  }

  deletes(id: string) {
    let ref = this.collection.ref;

  }

  getList() {
    return this.suppliers;
  }
}
