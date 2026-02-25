import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor(private router : Router){

  }
  appName='Angular'; // one way data binding
  version='version 14.x';
  firstName:string='Anil';
  fullName:string='';

  changeName(event:any):void {
    console.log(event);
    this.firstName = 'Anil Karusala';
  }
  handleFullName(e:any){
    console.log(e);
    this.fullName = e;
  }
  childRoute(){
    this.router.navigate(['/home/display/child-route'])

  }

  ngOnChanges(){
    console.log('ngOnChanges called');

  }

}
