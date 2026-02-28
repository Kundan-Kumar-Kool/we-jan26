import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProductComponent {

  productForm!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(100)]]
    });

  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log("Product Added:", this.productForm.value);
      alert("Product Added Successfully!");
      this.productForm.reset();
    }
  }


  get f() {
    return this.productForm.controls;
  }

}
