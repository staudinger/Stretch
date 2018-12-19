import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/grocery';
import { min } from 'rxjs/operators';

@Component({
  selector: 'app-grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css']
})
export class GroceryFormComponent implements OnInit {

  grocery: Grocery = null;

  constructor() { }

  ngOnInit() {
  }

}
