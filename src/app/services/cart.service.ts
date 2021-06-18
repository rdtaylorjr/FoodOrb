import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItems: Item[] = []

  constructor() { }

  addToCart(item: Item) {
    this.cartItems.push(item)
  }

}
