import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: any = {};
  isEdit = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      try {
        this.product = await this.productService.getProducto(id);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
  }

  async saveProduct() {
    try {
      if (this.isEdit) {
        await this.productService.putProducto(this.product.id, this.product);
      } else {
        await this.productService.postProducto(this.product);
      }
      this.router.navigate(['/products']);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  }
}
