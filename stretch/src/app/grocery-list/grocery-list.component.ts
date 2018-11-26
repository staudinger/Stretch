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
    this.filteredGroceries = this.ListFilter ? this.performFilter(this.ListFilter): this.groceries;
  }
  imageWidth: number = 50;
  imageMargin: number = 2;
  filteredGroceries: IGrocery[];
  cartGroceries: IGrocery[];
  groceries: IGrocery[] =
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
  performFilter(listFilter: string): IGrocery[]
  {
    listFilter = listFilter.toLocaleLowerCase();
    //using the array filter method
    //for each grocery in IGrocery =>
    //indexOf method to check each groceryName to match filter
    return this.groceries.filter((grocery: IGrocery) =>
    grocery.groceryName.toLocaleLowerCase().indexOf(listFilter) !==-1);
  }

  constructor() 
  { 
    this.filteredGroceries = this.groceries;
    
  }

  ngOnInit(): void 
  {

  }

}
