import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-company-leaves',
  templateUrl: './company-leaves.component.html',
  styleUrls: ['./company-leaves.component.css']
})
export class CompanyLeavesComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor(private api: AppService) {
    console.log('constructor loaded');
  }

  birthDate: any;
  activateReactForms: any = false;

  

  ngOnInit(): void {
    console.log('ngOnInit called');
    /**Calling api services */
    this.initialLoading(); // 
  }
  initialLoading() {
    this.doCurdOperations()
  }
  doCurdOperations() {
    this.api.create().subscribe((data) => {
      console.log(data);
    })
  }
  reactiveFormModuleFun() {
    this.activateReactForms = true;
  }
  reactiveFormModuleFun1() {
    this.activateReactForms = true;
  }

  


  /** Angular life cycle Hooks */
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }






}
