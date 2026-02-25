import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeerRoutingModule } from './employeer-routing.module';
import { CompanyLeavesComponent } from './company-leaves/company-leaves.component';


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
