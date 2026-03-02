import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLeavesComponent } from './company-leaves/company-leaves.component';
import { EmployeerRoutingModule } from './employeer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    CompanyLeavesComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    EmployeerRoutingModule,
    SharedModule
  ],
  exports:[EmployeerRoutingModule]
})
export class EmployeerModule { }
