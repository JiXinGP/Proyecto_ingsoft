import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SalesRegisterComponent } from './sales-register/sales-register.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  declarations: [
    SalesRegisterComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
