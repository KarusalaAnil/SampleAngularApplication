import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyLeavesComponent } from './company-leaves/company-leaves.component';

const routes: Routes = [
  {
    path:'leaves',component:CompanyLeavesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeerRoutingModule { }
