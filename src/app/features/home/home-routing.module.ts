import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ChildRouteComponent } from './child-route/child-route.component';

const routes: Routes = [
  {
    path: 'display', component: DisplayComponent,
    children: [
      {
        path: 'child-route', component: ChildRouteComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
