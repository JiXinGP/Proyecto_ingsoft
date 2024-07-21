import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl = 'http://localhost:3000/suppliers';

  constructor() { }

  async getProveedores(): Promise<any[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching suppliers:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error fetching suppliers:', error);
      throw error;
    }
  }

  async getProveedor(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching supplier:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error fetching supplier:', error);
      throw error;
    }
  }

  async postProveedor(supplier: any): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(supplier),
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error posting supplier:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error posting supplier:', error);
      throw error;
    }
  }

  async putProveedor(id: string, supplier: any): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(supplier),
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error updating supplier:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error updating supplier:', error);
      throw error;
    }
  }

  async deleteProveedor(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error deleting supplier:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error deleting supplier:', error);
      throw error;
    }
  }
}
