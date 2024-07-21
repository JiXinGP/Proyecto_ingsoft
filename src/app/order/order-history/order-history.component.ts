import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  public orders: any[] = [];

  constructor(private orderService: OrderService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.orders = await this.orderService.getHistorial();
    } catch (error) {
      console.error('Error fetching order history:', error);
    }
  }
}
