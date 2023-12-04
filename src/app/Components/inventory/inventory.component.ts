// inventory.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from 'src/app/Services/collection.service';
import { Inventory } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  
  inventory: FormGroup;
  inventoryData: Inventory[] = [];
  selectedProduct: Inventory | null = null; 
  editForm: FormGroup;

  mostrar: boolean=true;

  constructor(
    private collectionService: CollectionService 
  ) {
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

  onSubmit() {
    if (this.inventory.valid) {
      const newProduct: Inventory = this.inventory.value;
      this.collectionService.addInventory(newProduct)
        .then(() => {
          console.log('Producto agregado exitosamente');
          this.loadInventoryData();
          this.inventory.reset();
        })
        .catch(error => {
          console.error('Error al agregar el producto:', error);
        });
    }
  }

  editProduct(product: Inventory) {
    this.change();
    this.selectedProduct = product;
    this.editForm.setValue({
      nameProduct: product.nameProduct,
      description: product.description,
      unitPrice: product.unitPrice,
      category: product.category,
      order: product.order,
      stock: product.stock,
      stockMinimun: product.stockMinimun,
    });
  }

  async saveEdit() {
    this.change();
    if (this.selectedProduct) {
      const updatedProduct: Inventory = {
        ...this.selectedProduct,
        ...this.editForm.value,
      };

      // Verifica si idProduct es undefined antes de usarlo
      if (this.selectedProduct.idProduct !== undefined) {
        await this.collectionService.updateInventory(this.selectedProduct.idProduct, updatedProduct);
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

  change(){
    this.mostrar = !this.mostrar
  }

}
