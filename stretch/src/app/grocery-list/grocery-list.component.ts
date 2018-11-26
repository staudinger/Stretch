import { Component, OnInit } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit 
{
  filter: string = 'search';
  imageWidth: number = 50;
  imageMargin: number = 2;
  groceries: any[] =
  [
    {
      "groceryName": "potato",
      "imageUrl": "https://openclipart.org/image/100px/svg_to_png/209652/food-potato.png"    },
    {
      "groceryName": "tomato",
      "imageUrl": "https://openclipart.org/image/100px/svg_to_png/177512/tomate.png"
    }
];
  addToCart(): void 
  {

  }

  constructor() { }

  ngOnInit() {
  }

}
