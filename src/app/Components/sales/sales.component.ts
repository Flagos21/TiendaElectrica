import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { CollectionService } from 'src/app/Services/collection.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  sales: FormGroup;

  constructor(private collectionService: CollectionService) {
    this.sales = this.createSalesForm();
  }

  get salesArrayControls() {
    return (this.sales.get('salesArray') as FormArray).controls;
  }

  removeRow(index: number) {
    const salesArray = this.sales.get('salesArray') as FormArray;
    salesArray.removeAt(index);
  }

  duplicateRow() {
    const salesArray = this.sales.get('salesArray') as FormArray;
    const lastGroup = salesArray.at(salesArray.length - 1) as FormGroup;

    const newGroup = this.createSalesGroup();
    salesArray.push(newGroup);
  }

  onSubmit() {
    console.log(this.sales.value);
    this.submitToFirebase().then(response => {
      console.log(response);
    }).catch(error => {
      console.error('Error al enviar datos a Firebase:', error);
    });
  }

  private async submitToFirebase() {
    return await this.collectionService.addSales(this.sales.value);
  }

  private createSalesForm(): FormGroup {
    return new FormGroup({
      salesArray: new FormArray([this.createSalesGroup()])
    });
  }

  private createSalesGroup(): FormGroup {
    return new FormGroup({
      idClient: new FormControl(''),
      nameClient: new FormControl(''),
      date: new FormControl(''),
      order: new FormControl(''),
      direction: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      idVendor: new FormControl(''),
      nameVendor: new FormControl(''),
      nameProduct: new FormControl(''),
      stockPSales: new FormControl(''),
      discount: new FormControl(''),
      unitPrice: new FormControl(''),
      totalPSales: new FormControl('')
    });
  }
}
