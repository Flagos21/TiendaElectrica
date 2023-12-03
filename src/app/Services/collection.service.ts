// collection.service.ts

import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  DocumentData,
  where,
  query,
} from '@angular/fire/firestore';
import { Inventory, Sales } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {

  constructor(private firestore: Firestore) { }

  async addInventory(inventory: Inventory): Promise<void> {
    const collectionRef = collection(this.firestore, 'inventory');

    // Agregar el documento sin proporcionar el idProduct (Firebase generará uno automáticamente)
    const docRef = await addDoc(collectionRef, { ...inventory });

    // Obtener la uid generada por Firebase y actualizar el documento con esa uid como idProduct
    const uid = docRef.id;
    const inventoryRef = doc(this.firestore, 'inventory', uid);  // Cambio aquí
    await updateDoc(inventoryRef, 'idProduct', uid);
  }

  async getAllInventory(): Promise<Inventory[]> {
    const collectionRef = collection(this.firestore, 'inventory');
    const snapshot = await getDocs(collectionRef);
    const inventoryData: Inventory[] = [];
    snapshot.forEach(doc => {
      const data = doc.data() as Inventory;
      inventoryData.push(data);
    });
    return inventoryData;
  }

  async updateInventory(productId: string | undefined, updatedData: Inventory): Promise<void> {
    if (productId) {
      const inventoryRef = doc(this.firestore, 'inventory', productId);

      // Verificar la existencia del documento antes de intentar la actualización
      const docSnapshot = await getDoc(inventoryRef);
      if (docSnapshot.exists()) {
        const updatedInventoryData: DocumentData = {
          ...updatedData,
          idProduct: updatedData.idProduct || '',
        };

        // Realizar la actualización
        await updateDoc(inventoryRef, updatedInventoryData);
      } else {
        console.warn('El documento no existe. No se realizará ninguna actualización.');
      }
    }
  }

  async getInventoryByUid(uid: string): Promise<Inventory | undefined> {
    const collectionRef = collection(this.firestore, 'inventory');
    const q = query(collectionRef, where('idProduct', '==', uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data();
      return docData as Inventory;
    } else {
      console.warn('No se encontró el producto con la UID proporcionada');
      return undefined;
    }
  }

  async addSales(sales: Sales): Promise<void> {
    const collectionRef = collection(this.firestore, 'sales');
    await addDoc(collectionRef, sales);
  }
}
