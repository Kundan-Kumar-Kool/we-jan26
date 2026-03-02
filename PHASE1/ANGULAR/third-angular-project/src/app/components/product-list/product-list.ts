import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product';

@Component({
  selector: 'product-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {

  products!: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id:number) : void{
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }
}


