import { Component } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales-register',
  templateUrl: './sales-register.component.html',
  styleUrls: ['./sales-register.component.css']
})
export class SalesRegisterComponent {
  public sale: any = {};

  constructor(private salesService: SalesService) { }

  async registerSale(): Promise<void> {
    try {
      await this.salesService.postVenta(this.sale);
      console.log('Sale registered successfully');
    } catch (error) {
      console.error('Error registering sale:', error);
    }
  }
}
