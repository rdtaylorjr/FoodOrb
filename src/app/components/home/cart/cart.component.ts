import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Item[] = []
  view = 'cart'

  constructor(private router: Router, private cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cartItems
    if (this.cart.length < 1) {
      this.view = 'empty'
    }
  }

  getTotal() {
    let total = 0
    for (let i = 0; i < this.cart.length; ++i) {
      total += this.cart[i].price
    }
    return total
  }

  placeOrder() {
    this.orderService.placeOrder(this.cart, this.getTotal())
    this.cartService.cartItems = []
    this.router.navigate(['home/order'])
  }

}
