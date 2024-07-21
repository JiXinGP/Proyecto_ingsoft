import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor() { }

  async getUsuarios(): Promise<any[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching users:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async getUsuario(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching user:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  async postUsuario(user: any): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error posting user:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error posting user:', error);
      throw error;
    }
  }

  async putUsuario(id: string, user: any): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error updating user:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async deleteUsuario(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error deleting user:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
}
