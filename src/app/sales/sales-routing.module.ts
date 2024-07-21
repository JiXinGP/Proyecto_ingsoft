import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesRegisterComponent } from './sales-register/sales-register.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: 'register', component: SalesRegisterComponent },
  { path: 'invoice/:id', component: InvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
