import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductlistsComponent } from './allproductlists.component';

describe('AllproductlistsComponent', () => {
  let component: AllproductlistsComponent;
  let fixture: ComponentFixture<AllproductlistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllproductlistsComponent]
    });
    fixture = TestBed.createComponent(AllproductlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
