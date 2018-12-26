import { Component, OnInit } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';
import { Grocery } from 'src/app/grocery';
import { GroceryService } from '../grocery.service';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit 
{
  errorMessage: string;

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

  imageWidth: number = 50;
  imageMargin: number = 2;
  
  filteredGroceries: Grocery[];
  cart: Grocery[] =
  [];

  groceries: Grocery[] =
    [

    ];

  performFilter(listFilter: string, groceries: Grocery[]): Grocery[]
  {
    listFilter = listFilter.toLocaleLowerCase();
    //using the array filter method
    //for each grocery of type IGrocery in groceries =>
    //indexOf method to check each groceryName to match filter
    return groceries.filter((grocery: Grocery) =>
    grocery.id.toLocaleLowerCase().indexOf(listFilter) !==-1);
  }
  addToCart(grocery: Grocery): void
  {
      this.cart = this.cartService.getCart();
      this.cart.push(grocery);
      this.cartService.setCart(this.cart);
  }


  constructor(private groceryService: GroceryService, private cartService: CartService) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.groceryService.getGroceries().subscribe
    (
      //returned data (groceries) is initialized to local groceries array.
      serviceGroceries => 
      {
        this.groceries = serviceGroceries;
        this.filteredGroceries = this.groceries;
      },
      //casting error to any data type
      error => this.errorMessage = <any>error
    );
  }

}
