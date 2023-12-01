import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import { Sales } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private firestore: Firestore) { }

  addSales(sales: Sales){
    const collectionRef = collection(this.firestore, 'sales')
    return addDoc(collectionRef, sales);
  }
}
