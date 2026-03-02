import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  @Input("product") product!: Product;

  constructor(){
    
  }

  ngOnInit():void {

  }

}
