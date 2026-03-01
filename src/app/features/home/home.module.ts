import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from '../shared/shared.module';
import { ChildDataPassingComponent } from './child-data-passing/child-data-passing.component';
import { ChildRouteComponent } from './child-route/child-route.component';


@NgModule({
  declarations: [
    DisplayComponent,
    ChildDataPassingComponent,
    ChildRouteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
    
  ]
})
export class HomeModule { }
