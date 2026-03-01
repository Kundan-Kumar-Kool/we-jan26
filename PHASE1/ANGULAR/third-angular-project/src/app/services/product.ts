import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products!: Product[];

  constructor(){
    this.products = [];
    this.products.push(new Product(0, "Dell Monitor", 10000, "", true, "", 1000));
    this.products.push(new Product(1, "HP Printer", 7000, "", true, "", 1000));
  }

  getProducts() : Product[]{
    return this.products;
  }

  getProduct(id:number) : Product{
    return this.products[id];
  }

  addProduct(product:Product):void {
    console.log ("INSIDE addProduct of Product service");
    this.products.push(product);
  }

  deleteProduct(id:number):void {
    console.log ("INSIDE deleteProduct of Product service");
    this.products = this.products.filter( item => item.id !== id);
  }
  
}
