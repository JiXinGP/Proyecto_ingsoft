import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  suppliers: any[] = [];

  constructor(private supplierService: SupplierService) { }

  async ngOnInit() {
    try {
      this.suppliers = await this.supplierService.getProveedores();
    } catch (error) {
      console.error('Error loading suppliers:', error);
    }
  }

  async deleteSupplier(id: string) {
    try {
      await this.supplierService.deleteProveedor(id);
      this.suppliers = this.suppliers.filter(supplier => supplier.id !== id);
    } catch (error) {
      console.error('Error deleting supplier:', error);
    }
  }
}
