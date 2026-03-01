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
  productService!: ProductService;

  constructor(productServ: ProductService) {
    this.productService = productServ;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id:number) : void{
    //TODO
  }
}

// TASK-1: Create a User model, UserService and an UserComponent.
// Display User name in top right corner of the home page (App.html)
