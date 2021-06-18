import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { Order } from '../interfaces/order';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = []

  constructor(private loginService: LoginService) { }

  placeOrder(items: Item[], total: number) {
    let order: Order = {
      id: 1,
      userId: this.loginService.getCurrentUser().id,
      items: items,
      cost: total,
      status: 'Placed',
      remainingTime: 25
    }
    this.orders.push(order)
  }

}
