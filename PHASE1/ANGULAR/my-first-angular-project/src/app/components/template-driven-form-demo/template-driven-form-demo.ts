import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form-demo.html',
  styleUrl: './template-driven-form-demo.css',
})
export class TemplateDrivenFormDemo {

  productName: string = 'Dell TV';
  price: number = 0;



}
