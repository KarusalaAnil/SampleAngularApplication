import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'employeer',loadChildren:()=>import("./features/employeer/employeer.module").then((emp)=>emp.EmployeerModule)
  },
  {
    path:'home',loadChildren:()=>import("./features/home/home.module").then((home)=>home.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
