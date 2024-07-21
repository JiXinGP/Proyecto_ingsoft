import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public invoice: any = {};

  constructor(private salesService: SalesService) { }

  async ngOnInit(): Promise<void> {
    const id = 'some-id'; // Ajusta según tu lógica
    try {
      this.invoice = await this.salesService.getFactura(id);
    } catch (error) {
      console.error('Error fetching invoice:', error);
    }
  }
}
