import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductComponent } from './components/product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
