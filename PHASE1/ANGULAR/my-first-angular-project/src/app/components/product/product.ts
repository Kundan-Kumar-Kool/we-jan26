import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  // we are using @Input here so that the properties values are set by the 
  // parent component (app.html)
  @Input("name") name!: string;
  @Input("price") price!:number;

  @Output() event1 : EventEmitter<string> = new EventEmitter<string>();

  likeCounter = 0;

  messageToParent(): void{
    console.log(" somebody called messageToParent() ");
    this.likeCounter++;
    this.event1.emit(this.name + " : Hi Parent, I have been liked " +  this.likeCounter + " times today, hope you appreciate it!");
  };



}
