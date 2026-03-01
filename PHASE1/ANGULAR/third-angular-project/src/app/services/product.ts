import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products!: Product[];

  constructor(){
    this.products = [];
    this.products.push(new Product(1, "Dell Monitor", 10000, "", true, "", 1000));
    this.products.push(new Product(2, "HP Printer", 7000, "", true, "", 1000));
  }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products[id];
  }
  
}
