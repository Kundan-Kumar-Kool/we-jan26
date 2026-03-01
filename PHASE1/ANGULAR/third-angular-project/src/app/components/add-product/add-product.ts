import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProductComponent {

  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(100)]],
      description: ['', [Validators.minLength(10), Validators.maxLength(20)]],
    });

  }

  // utility function to create a random number
  getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  onSubmit(): void {
    // if (this.productForm.valid) {
    console.log("Product Added:", this.productForm.value);
    let id = this.getRandomInt(100, 1000);
    let name = this.f['name']?.value;
    let price = this.f['price']?.value;

    let prod = new Product(id, name, price);
    this.productService.addProduct(prod);

    this.productForm.reset();
    //}

  }


  get f() {
    return this.productForm.controls;
  }

}

// TASK-2: Implement delete product function in your product list component