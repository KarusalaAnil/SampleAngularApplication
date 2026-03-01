import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-data-passing',
  templateUrl: './child-data-passing.component.html',
  styleUrls: ['./child-data-passing.component.css']
})
export class ChildDataPassingComponent {

  constructor(private router : Router) {}

  @Input() firstName:string='default value is child names';
  @Input() fullName:string ='default value of full name ';
  @Output() updateFullNmae = new EventEmitter();

  updateFullName:string = '';


  clickUpdate(){
    this.updateFullNmae.emit(this.updateFullName);
  }
childRoute(){
    this.router.navigate(['/home/display/child-route'])

  }

}
