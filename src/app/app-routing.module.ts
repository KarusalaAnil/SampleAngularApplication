import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildRouteComponent } from './home/child-route/child-route.component';

const routes: Routes = [
  {
    path:'childPath',component:ChildRouteComponent,
  },
  {
    path:'employeer',loadChildren:()=>import("./employeer/employeer.module").then((emp)=>emp.EmployeerModule)
  },
  {
    path:'home',loadChildren:()=>import("./home/home.module").then((home)=>home.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
