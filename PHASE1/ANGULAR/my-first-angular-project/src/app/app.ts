import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product';
import { UserComponent } from './components/user/user';
import { AddProductComponent } from './components/add-product/add-product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductComponent, UserComponent, AddProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Amazon Estore');

  x1: string = "Hello World";

  inStock: boolean = false;

  quantity: number = 10;

  arr1 = ["Mango", "Apple"];

  student1: {} ={
    name:"Balu",
    age:25
  };

  add( x : number , y : number) : number {
    return x+y;
  }

  sayHi() : void {
    console.log("Hi");
  }

  event1Handler(event:any) : void {
  console.log(`<IN-APP component> : ${event} `);
  }
}
