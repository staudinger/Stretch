import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Grocery } from '../grocery';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  
  cart: Grocery[] = this.cartService.getCart();
  
  removeFromCart(grocery: Grocery): void
  {
    var index = this.cart.indexOf(grocery);
    if(index !== -1)
    {
      this.cart.splice(index, 1);
    }
    this.cartService.setCart(this.cart);
  }

  
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
