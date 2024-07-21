import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    try {
      this.products = await this.productService.getProductos();
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  async deleteProduct(id: string) {
    try {
      await this.productService.deleteProducto(id);
      this.products = this.products.filter(product => product.id !== id);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
}
