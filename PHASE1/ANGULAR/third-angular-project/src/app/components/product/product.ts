import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  product!: Product;
  productService!: ProductService;

  @Input() id!:number;

  constructor(productServ: ProductService) {
    this.productService = productServ;
  }

  ngOnInit(): void {
    this.product = this.productService.getProduct(this.id);
  }

}
