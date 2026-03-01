import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLeavesComponent } from './company-leaves/company-leaves.component';
import { EmployeerRoutingModule } from './employeer-routing.module';



@NgModule({
  declarations: [
    CompanyLeavesComponent
  ],
  imports: [
    CommonModule,
    EmployeerRoutingModule
  ],
  exports:[EmployeerRoutingModule]
})
export class EmployeerModule { }
