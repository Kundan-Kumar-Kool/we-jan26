import { Component } from '@angular/core';

@Component({
  selector: 'user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  name: string = 'John';
  age: number = 25;
}
