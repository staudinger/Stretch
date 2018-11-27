import { Component, OnInit } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';
import { IGrocery, Grocery } from 'src/interfaces/grocery';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit 
{
  _listFilter: string;
  get ListFilter(): string
  {
    return this._listFilter;
  }
  set ListFilter(value: string){
    this._listFilter = value;
    //if there is a filter value, perform filter
    this.filteredGroceries = this.ListFilter ? this.performFilter(this.ListFilter, this.groceries): this.groceries;
  }

  _cartFilter: string;
  get CartFilter(): string
  {
    return this._cartFilter;
  }
  set CartFilter(value: string){
    this._cartFilter = value;
    //if there is a filter value, perform filter
    this.filteredCart = this.CartFilter ? this.performFilter(this.CartFilter, this.cart): this.cart;
  }
  imageWidth: number = 50;
  imageMargin: number = 2;
  filteredGroceries: IGrocery[];
  filteredCart: IGrocery[];
  cart: IGrocery[] = 
  [{
    "groceryName": "potato",
    "imageUrl": "https://openclipart.org/image/100px/svg_to_png/209652/food-potato.png"    
  }];
  groceries: IGrocery[] =
  [
    {
      "groceryName": "potato",
      "imageUrl": "https://openclipart.org/image/100px/svg_to_png/209652/food-potato.png"    
    },
    {
      "groceryName": "tomato",
      "imageUrl": "https://openclipart.org/image/100px/svg_to_png/177512/tomate.png"
    }
];

  performFilter(listFilter: string, groceries: IGrocery[]): IGrocery[]
  {
    listFilter = listFilter.toLocaleLowerCase();
    //using the array filter method
    //for each grocery of type IGrocery in groceries =>
    //indexOf method to check each groceryName to match filter
    return this.groceries.filter((grocery: IGrocery) =>
    grocery.groceryName.toLocaleLowerCase().indexOf(listFilter) !==-1);
  }
  addToCart(grocery: IGrocery): void
  {
      this.cart.push(grocery);
  }
  removeFromCart(grocery: IGrocery): void
  {
    var index = this.cart.indexOf(grocery);
    if(index !== -1)
    {
      this.cart.splice(index, 1);
    }
  }

  constructor() 
  { 
    this.filteredGroceries = this.groceries;
    this.filteredCart = this.cart;
    
  }

  ngOnInit(): void 
  {

  }

}
