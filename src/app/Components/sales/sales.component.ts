import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CollectionService } from 'src/app/Services/collection.service'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  sales: FormGroup;

  constructor(private collectionService: CollectionService){
    this.sales = new FormGroup({
      idClient: new FormControl(),
      nameClient:new FormControl(),
      date: new FormControl(),
      order: new FormControl(),
      direction: new FormControl(),
      phone: new FormControl(),
      idVendor: new FormControl(),
      nameVendor: new FormControl(),
      nameProduct: new FormControl(),
      stockPSales: new FormControl(),
      discount: new FormControl(),
      unitPrice: new FormControl(),
      totalPSales: new FormControl(),
    })
  }

    ngOnInit(){}

    async onSubmit(){
      console.log(this.sales.value)
      const response = await this.collectionService.addSales(this.sales.value);
      console.log(response);
    }

}
