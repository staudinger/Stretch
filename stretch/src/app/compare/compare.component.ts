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
  
  addWalmartPrices(cart:Grocery[]): number
  {
   var total = 0;
   for(let grocery of cart)
   {
     total += grocery.walmartPrice;
   }
   return total;
  }
  addAldiPrices(cart:Grocery[]): number
  {
   var total = 0;
   for(let grocery of cart)
   {
     total += grocery.aldiPrice;
   }
   return total;
  }
  addTraderJoesPrices(cart:Grocery[]): number
  {
   var total = 0;
   for(let grocery of cart)
   {
     total += grocery.traderJoesPrice;
   }
   return total;
  }
  addPublixPrices(cart:Grocery[]): number
  {
   var total = 0;
   for(let grocery of cart)
   {
     total += grocery.publixPrice;
   }
   return total;
  }


  walmartTotal: number = this.addWalmartPrices(this.cart);
  aldiTotal: number = this.addAldiPrices(this.cart);
  traderJoesTotal: number = this.addTraderJoesPrices(this.cart);
  publixTotal: number = this.addPublixPrices(this.cart);

  

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
