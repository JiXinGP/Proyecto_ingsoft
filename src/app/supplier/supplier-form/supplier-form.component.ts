import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {
  supplier: any = {};
  isEdit: boolean = false;
  errorMessage: string = '';

  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      try {
        this.supplier = await this.supplierService.getProveedor(id);
      } catch (error) {
        this.errorMessage = 'Error fetching supplier';
      }
    }
  }

  async saveSupplier(): Promise<void> {
    try {
      if (this.isEdit) {
        await this.supplierService.putProveedor(this.supplier.id, this.supplier);
      } else {
        await this.supplierService.postProveedor(this.supplier);
      }
      this.router.navigate(['/suppliers']);
    } catch (error) {
      this.errorMessage = 'Error saving supplier';
    }
  }
}
