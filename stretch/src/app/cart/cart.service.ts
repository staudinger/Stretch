import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from '../grocery';
import { _createNgProbe } from '@angular/platform-browser/src/dom/debug/ng_probe';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private router: Router) { }

  private _cart: Grocery[] = [];

  setCart(cart: Grocery[]){
    this._cart = cart;
  }

  getCart()
  {
    return this._cart;
  }
}
