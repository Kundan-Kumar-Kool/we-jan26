import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  product!: Product;

  constructor(){
    this.product = new Product(1,"Dell Monitor",10000, "", true, "", 1000 );
  }

}
