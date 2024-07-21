import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl = 'http://localhost:3000/sales'; // Asegúrate de que esta URL sea correcta

  constructor() { }

  async postVenta(sale: any): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sale),
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error posting sale:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error posting sale:', error);
      throw error;
    }
  }
  
  async getFactura(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/factura/${id}`);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching invoice:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error fetching invoice:', error);
      throw error;
    }
  }
}
