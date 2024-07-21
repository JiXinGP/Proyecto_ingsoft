import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = []; // Lista de productos
  isLoading = true; // Estado de carga para manejar la UI

  constructor(private productService: ProductService) { }

  async ngOnInit(): Promise<void> {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    try {
      this.products = await this.productService.getProductos();
    } catch (error) {
      console.error('Error loading products:', error);
      // Maneja el error aquí, tal vez mostrando un mensaje al usuario
    } finally {
      this.isLoading = false; // Cambia el estado de carga al terminar
    }
  }

  async deleteProduct(id: string): Promise<void> {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        await this.productService.deleteProducto(id);
        this.products = this.products.filter(product => product.id !== id);
      } catch (error) {
        console.error('Error deleting product:', error);
        // Maneja el error aquí, tal vez mostrando un mensaje al usuario
      }
    }
  }
}
