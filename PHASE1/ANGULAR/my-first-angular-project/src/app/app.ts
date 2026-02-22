import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Amazon Estore');

  x1 = "Hello World";

  arr1 = ["Mango", "Apple"];

  student1 ={
    name:"Balu",
    age:25
  }
}
