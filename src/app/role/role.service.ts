import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = 'http://localhost:3000/roles'; // Asegúrate de que esta URL sea correcta

  constructor() { }

  async getRoles(): Promise<any> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        const errorText = await response.text(); // Leer como texto para depurar
        console.error('Error fetching roles:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Usa json() en lugar de text() y parse()
    } catch (error) {
      console.error('Error fetching roles:', error);
      throw error;
    }
  }
}
