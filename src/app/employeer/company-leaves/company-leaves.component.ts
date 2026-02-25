import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-company-leaves',
  templateUrl: './company-leaves.component.html',
  styleUrls: ['./company-leaves.component.css']
})
export class CompanyLeavesComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() {
    console.log('constructor loaded');
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
  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }






}
