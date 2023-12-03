// inventory.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from 'src/app/Services/collection.service';
import { Inventory } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  inventory: FormGroup;
  inventoryData: Inventory[] = [];
  selectedProduct: Inventory | null = null;
  editForm: FormGroup;

  constructor(private collectionService: CollectionService) {
    this.inventory = new FormGroup({
      nameProduct: new FormControl('', Validators.required),
      description: new FormControl(''),
      unitPrice: new FormControl(0, Validators.min(0)),
      category: new FormControl(''),
      order: new FormControl(0, Validators.min(0)),
      stock: new FormControl(0, Validators.min(0)),
      stockMinimun: new FormControl(0, Validators.min(0)),
    });

    this.editForm = new FormGroup({
      nameProduct: new FormControl('', Validators.required),
      description: new FormControl(''),
      unitPrice: new FormControl(0, Validators.min(0)),
      category: new FormControl(''),
      order: new FormControl(0, Validators.min(0)),
      stock: new FormControl(0, Validators.min(0)),
      stockMinimun: new FormControl(0, Validators.min(0)),
    });
  }

  ngOnInit() {
    this.loadInventoryData();
  }

  async loadInventoryData() {
    this.inventoryData = await this.collectionService.getAllInventory();
  }

  async onSubmit() {
    if (this.inventory.valid) {
      const newProduct: Inventory = this.inventory.value;

      try {
        await this.collectionService.addInventory(newProduct);
        console.log('Producto agregado exitosamente');
        this.loadInventoryData();
        this.inventory.reset();
      } catch (error) {
        console.error('Error al agregar el producto:', error);
      }
    }
  }

  async editProduct(product: Inventory) {
    // Obtener la UID del documento
    const uid = product.idProduct;

    if (uid) {
      // Obtener el documento completo usando la UID
      const updatedProduct = await this.collectionService.getInventoryByUid(uid);

      if (updatedProduct) {
        this.selectedProduct = updatedProduct;
        this.editForm.setValue({
          nameProduct: updatedProduct.nameProduct,
          description: updatedProduct.description,
          unitPrice: updatedProduct.unitPrice,
          category: updatedProduct.category,
          order: updatedProduct.order,
          stock: updatedProduct.stock,
          stockMinimun: updatedProduct.stockMinimun,
        });
      } else {
        console.error('Error: No se encontró el producto con la UID proporcionada');
      }
    } else {
      console.error('Error: idProduct es nulo o indefinido');
    }
  }

  async saveEdit() {
    if (this.selectedProduct) {
      const updatedProduct: Inventory = {
        ...this.selectedProduct,
        ...this.editForm.value,
      };

      if (this.selectedProduct.idProduct !== undefined) {
        await this.collectionService.updateInventory(
          this.selectedProduct.idProduct,
          updatedProduct
        );
        await this.loadInventoryData();
        this.clearEditForm();
      } else {
        console.error('Error: idProduct es undefined');
      }
    }
  }

  clearEditForm() {
    this.selectedProduct = null;
    this.editForm.reset();
  }
}
