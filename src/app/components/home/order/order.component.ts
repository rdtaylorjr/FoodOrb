import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = []
  view = 'none'

  constructor(private orderService: OrderService) { }

  ngOnInit(): void { 
    this.orders = this.orderService.orders
    if (this.orders.length === 1) {
      this.view = 'placed'
    }
  }

  cancelOrder() {
    this.view = 'cancelled'
  }

}
