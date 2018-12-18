import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Grocery } from '../grocery';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit { 
  cart: Grocery[] = this.cartService.getCart();
  
  addWalmartTotal(cart:Grocery[]): number
  {
   var total = 0;
   for(let grocery of cart)
   {
     total += grocery.walmartPrice;
   }
   return total;
  }
  addAldiTotal(cart:Grocery[]): number
  {
   var total = 0;
   for(let grocery of cart)
   {
     total += grocery.aldiPrice;
   }
   return total;
  }
  addTraderJoesTotal(cart:Grocery[]): number
  {
   var total = 0;
   for(let grocery of cart)
   {
     total += grocery.traderJoesPrice;
   }
   return total;
  }
  addPublixTotal(cart:Grocery[]): number
  {
   var total = 0;
   for(let grocery of cart)
   {
     total += grocery.publixPrice;
   }
   return total;
  }


  walmartTotal: number = this.addWalmartTotal(this.cart);
  aldiTotal: number = this.addAldiTotal(this.cart);
  traderJoesTotal: number = this.addTraderJoesTotal(this.cart);
  publixTotal: number = this.addPublixTotal(this.cart);

  

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
