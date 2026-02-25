import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router : Router){

  }
  title = 'SampleApplication';
  
  handleModule(name:string){
    // this.router.navigateByUrl("/employeer/leave")
    if(name == 'employer')
      this.router.navigate(['/employeer/leaves']);
    else 
      this.router.navigateByUrl('/home/display');
  }
}
