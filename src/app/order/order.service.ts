import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:3000/orders';

  constructor() { }

  async postHistorial(order: any): Promise<any> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error posting order:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error posting order:', error);
      throw error;
    }
  }

  async getHistorial(): Promise<any> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching history:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching history:', error);
      throw error;
    }
  }

  async getClientesFrecuentes(): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/frequent-customers`);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching frequent customers:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching frequent customers:', error);
      throw error;
    }
  }
}
