import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDataPassingComponent } from './child-data-passing.component';

describe('ChildDataPassingComponent', () => {
  let component: ChildDataPassingComponent;
  let fixture: ComponentFixture<ChildDataPassingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildDataPassingComponent]
    });
    fixture = TestBed.createComponent(ChildDataPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
