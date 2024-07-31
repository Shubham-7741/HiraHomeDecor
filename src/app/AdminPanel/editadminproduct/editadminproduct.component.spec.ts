import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminproductComponent } from './editadminproduct.component';

describe('EditadminproductComponent', () => {
  let component: EditadminproductComponent;
  let fixture: ComponentFixture<EditadminproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditadminproductComponent]
    });
    fixture = TestBed.createComponent(EditadminproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
