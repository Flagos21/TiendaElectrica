import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CollectionService } from 'src/app/Services/collection.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  
  inventory: FormGroup;

  constructor(
    private collectionService: CollectionService 
  ) {
    this.inventory = new FormGroup({
      nameProduct: new FormControl(),
      description: new FormControl(),
      unitPrice: new FormControl(),
      category: new FormControl(), order: new FormControl(),
      stock: new FormControl(),
      stockMinimun: new FormControl(),
    });

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.inventory.value)
    const response = await this.collectionService.addInventory(this.inventory.value);
    console.log(response);
  }
}
