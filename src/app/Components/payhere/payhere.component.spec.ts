import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayhereComponent } from './payhere.component';

describe('PayhereComponent', () => {
  let component: PayhereComponent;
  let fixture: ComponentFixture<PayhereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayhereComponent]
    });
    fixture = TestBed.createComponent(PayhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
