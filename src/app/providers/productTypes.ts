import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
const COLLECTION_NAME = "productTypes";

@Injectable()
export class TypesProvider {
  types: Observable<any[]>;

  get collection() {
    return this.db.collection(COLLECTION_NAME)
  }

  constructor(private db: AngularFirestore) {
    this.types = db.collection(COLLECTION_NAME).valueChanges();
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
    return this.types;
  }
}
