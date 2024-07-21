import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor() { }

  async getProductos(): Promise<any[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching products:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getProducto(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching product:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  async postProducto(product: any): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error posting product:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error posting product:', error);
      throw error;
    }
  }

  async putProducto(id: string, product: any): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error updating product:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  }

  async deleteProducto(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error deleting product:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
}
